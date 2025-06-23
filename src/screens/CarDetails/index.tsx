import Acessory from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import {
    About, Acessories, Brand, CarImages, Container,
    Content, Description, Details, Footer, Header, Name, Period, Price, Rent
} from "./styles";


import Button from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartDTO } from "../../dtos/CartDTO";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

const CarDetails = () => {
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as { car: CartDTO };

    const handleConfirmRental = () => {
        navigation.navigate('Scheduling');
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container testID="car-details">
            <Header>
                <BackButton onPress={handleGoBack} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={car.photos} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Acessories>
                    {
                        car.accessories.map((accessory) => (
                            <Acessory key={accessory.type} name={accessory.name} icon={getAcessoryIcon(accessory.type as any)} />
                        ))
                    }
                </Acessories>

                <About>
                    {car.about}
                </About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}

export default CarDetails;