import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import Loading from '../../components/Loading';
import { Alert, FlatList, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarList,
  CarWrapper,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from './styles';
import Car from '../../components/Car';
import { CartDTO } from '../../dtos/CartDTO';
import { AntDesign } from '@expo/vector-icons';
interface CarProps {
  id: string;
  user_id: string;
  car: CartDTO;
  startDate: string;
  endDate: string;
}

const MyCars = () => {
  const navigation = useNavigation<any>();
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const fetchCars = async () => {
    const response = await api.get<CarProps[]>('/schedules_byuser?user_id=1');
    setCars(response.data);
  };

  useEffect(() => {
    try {
      fetchCars();
    } catch (error) {
      Alert.alert('Erro', error as string);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack} color={theme.colors.shape} />

      <Header>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Title>
          Seus agendamentos, estão aqui.{'\n'}
          Você vai precisar de um café para começar{'\n'}o seu dia.
        </Title>

        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <CarList testID='car-list'>
            <FlatList
              data={cars}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item: CarProps) => item.id}
              renderItem={({ item }) => (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <AntDesign
                        name='arrowright'
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          </CarList>
        </Content>
      )}
    </Container>
  );
};

export default MyCars;
