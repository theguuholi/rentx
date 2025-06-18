import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { About, Brand, CarImages, Container, Content, Description, Details, Header, Name, Period, Price, Rent } from "./styles";

const CarDetails = () => {
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
        <Container testID="car-details">
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
                        <Price>150</Price>
                    </Rent>
                </Details>

                <About>
                    Este é um automóvel desportivo. Fabricado em 2020, o Huracan é um dos carros mais rápidos do mundo.
                </About>
            </Content>
        </Container>
    )
}

export default CarDetails;