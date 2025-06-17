import { BackButton } from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";
import { CarImages, Container, Header } from "./styles";

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
        </Container>
    )
}

export default CarDetails;