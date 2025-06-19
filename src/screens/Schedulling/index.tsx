import { BackButton } from "../../components/BackButton";
import { Container, Header, Title, RentalPeriod, DateInfo, DateTitle, DateValue, Content, Footer } from "./styles";
import theme from "../../styles/theme";
import ArrowSvg from "../../assets/arrow.svg";
import { StatusBar } from "react-native";
import Button from "../../components/Button";

const Schedulling = () => {
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <Header>
                <BackButton onPress={() => { }} color={theme.colors.shape} />
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
            </Content>

            <Footer>
                <Button title="Confirmar" />
            </Footer>

        </Container>
    );
};

export default Schedulling;