import Acessory from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import {
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartDTO } from '../../dtos/CartDTO';
import { Acessories } from '../CarDetails/styles';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Alert } from 'react-native';

interface RentalPeriod {
  start: string;
  end: string;
}

const SchedulingDetails = () => {
  const navigation = useNavigation<any>();
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({
    start: '',
    end: '',
  });
  const route = useRoute();
  const { car, dates } = route.params as { car: CartDTO; dates: string[] };
  const rentTotal = Number(car.rent.price * dates.length);

  const handleConfirmRental = async () => {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() => {
        navigation.navigate('SchedulingComplete');
      })
      .catch(() => {
        Alert.alert('Não foi possível confirmar o agendamento');
      });
  };

  useEffect(() => {
    setRentalPeriod({
      start: dates[0],
      end: dates[dates.length - 1],
    });
  }, [dates]);

  return (
    <Container testID='scheduling-details'>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
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

        <Acessories testID='accessories-list'>
          {car.accessories.map(accessory => (
            <Acessory
              key={accessory.type}
              name={accessory.name}
              icon={getAcessoryIcon(accessory.type as any)}
            />
          ))}
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={RFValue(24)}
            color={theme.colors.title}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              {`R$ ${car.rent.price} x ${dates.length} diárias`}
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title='Alugar agora'
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
