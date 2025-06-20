import Acessory from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import {
    Accessories, Brand, CalendarIcon, CarImages, Container,
    Content, DateInfo, DateTitle, DateValue, Description, Details, Footer, Header, Name, Period, Price, Rent,
    RentalPeriod, RentalPrice, RentalPriceLabel, RentalPriceDetails, RentalPriceQuota, RentalPriceTotal
} from "./styles";

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';
import Button from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";
import { Feather } from "@expo/vector-icons";

const SchedulingDetails = () => {
    const imagesUrl = [
        'https://pngimg.com/d/mustang_PNG47.png',
        'https://pngimg.com/d/camaro_PNG10164.png',
        'https://pngimg.com/d/porsche_PNG10164.png',
        'https://pngimg.com/d/ferrari_PNG10164.png',
        'https://pngimg.com/d/lamborghini_PNG10164.png',
        'https://pngimg.com/d/mercedes_PNG10164.png',
        'https://pngimg.com/d/bmw_PNG10164.png',
    ]

    return (
        <Container testID="scheduling-details">
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={imagesUrl} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborguini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao Dia</Period>
                        <Price>R$ 150,00</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Acessory name="380Km/h" icon={SpeedSvg} />
                    <Acessory name="3.2s" icon={AccelerationSvg} />
                    <Acessory name="825 hp" icon={ForceSvg} />
                    <Acessory name="Gasolina" icon={GasolineSvg} />
                    <Acessory name="Auto" icon={ExchangeSvg} />
                    <Acessory name="2 pessoas" icon={PeopleSvg} />
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                    <Feather name="chevron-right" size={RFValue(24)} color={theme.colors.title} />

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>
                            R$ 580,00 x 3 diarias
                        </RentalPriceQuota>
                        <RentalPriceTotal>
                            R$ 2900,00
                        </RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button title="Alugar agora" color={theme.colors.success} onPress={() => { }} />
            </Footer>
        </Container>
    )
}

export default SchedulingDetails;