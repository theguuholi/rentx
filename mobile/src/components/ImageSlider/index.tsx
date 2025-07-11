import { FlatList, ViewToken } from 'react-native';
import { Container, ImageIndexes, CarImageWrapper, CarImage } from './styles';
import { useCallback, useState } from 'react';
import Bullet from '../Bullet';

interface ImageSliderProps {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const ImageSlider = ({ imagesUrl }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleViewableItemsChanged = useCallback((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index;
    setImageIndex(index || 0);
  }, []);

  return (
    <Container testID='image-slider'>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={String(index)} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode='contain' />
          </CarImageWrapper>
        )}
        onViewableItemsChanged={handleViewableItemsChanged}
      />
    </Container>
  );
};

export default ImageSlider;
