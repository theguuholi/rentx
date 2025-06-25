import { BackButton } from "../../components/BackButton";
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from "./styles";
import theme from "../../styles/theme";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import Button from "../../components/Button";
import { Calendar, DayProps, generateInterval, MarkedDateProps } from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Scheduling = () => {
    const navigation = useNavigation();
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);

    const handleConfirmRental = () => {
        navigation.navigate('SchedulingDetails');
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    const handleChangeDate = (date: DayProps) => {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }


    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Header>
                <BackButton onPress={handleGoBack} color={theme.colors.shape} />
                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false}>18/06/2025</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>Ate</DateTitle>
                        <DateValue selected={true}>18/06/2025</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} />
            </Footer>

        </Container>
    );
};

export default Scheduling;