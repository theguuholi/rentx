import Acessory from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import {
  About,
  Acessories,
  AnimatedScrollView,
  Brand,
  CarImages,
  Container,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartDTO } from '../../dtos/CartDTO';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { Animated, StatusBar, StyleSheet } from 'react-native';
import theme from '../../styles/theme';

const CarDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 200],
            [0, -200],
            Extrapolation.CLAMP
          ),
          opacity: interpolate(
            scrollY.value,
            [0, 200],
            [1, 0],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const { car } = route.params as { car: CartDTO };

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling', {
      car,
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 100], [1, 0], Extrapolation.CLAMP),
    };
  });

  return (
    <Container testID='car-details'>
      <StatusBar
        barStyle='dark-content'
        translucent
        backgroundColor='transparent'
      />
      <Animated.View style={[styles.header, headerStyle, { backgroundColor: theme.colors.background_secondary }]}>
        <Header>
          <BackButton onPress={handleGoBack} testID='back-button' />
        </Header>

        <CarImages style={sliderCarsStyleAnimation}>
          <ImageSlider imagesUrl={car.photos} />
        </CarImages>
      </Animated.View>

      <AnimatedScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Details>
          <Description>
            <Brand testID='car-brand'>{car.brand}</Brand>
            <Name testID='car-name'>{car.name}</Name>
          </Description>

          <Rent>
            <Period testID='rent-period'>{car.rent.period}</Period>
            <Price testID='rent-price'>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Acessories testID='accessories-list'>
          {car.accessories.map(accessory => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAcessoryIcon(accessory.type as any)}
            />
          ))}
        </Acessories>

        <About testID='car-about'>{car.about}</About>
        <About testID='car-about'>{car.about}</About>
        <About testID='car-about'>{car.about}</About>
        <About testID='car-about'>{car.about}</About>
        <About testID='car-about'>{car.about}</About>
      </AnimatedScrollView>

      <Footer>
        <Button
          title='Escolher período do aluguel'
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
});

export default CarDetails;
