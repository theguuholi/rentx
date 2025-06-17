import { Container, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from "./styles";

interface ImageSliderProps {
    imagesUrl: string[];
}

const ImageSlider = ({ imagesUrl }: ImageSliderProps) => {
    return (
        <Container testID="image-slider">
            <ImageIndexes>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>

            <CarImageWrapper>
                <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
            </CarImageWrapper>
        </Container>
    )
}

export default ImageSlider;