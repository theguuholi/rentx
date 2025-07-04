import { BackButton } from '../../components/BackButton';
import {
  Container,
  Header,
  Title,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
  RentalPeriod,
} from './styles';
import theme from '../../styles/theme';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import Button from '../../components/Button';
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { CartDTO } from '../../dtos/CartDTO';

interface RentalPeriod {
  start: string;
  end: string;
  startFormatted: string;
  endFormatted: string;
}

const Scheduling = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { car } = route.params as { car: CartDTO };
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

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

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.dateString,
      end: end.dateString,
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        'dd/MM/yyyy'
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  };

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
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
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Ate</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title='Confirmar'
          enabled={!!rentalPeriod.startFormatted}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};

export default Scheduling;
