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
  CarList,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
} from './styles';
import Car from '../../components/Car';
import { CartDTO } from '../../dtos/CartDTO';
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
      <Header>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <BackButton onPress={handleGoBack} color={theme.colors.shape} />
        <Title>
          Seus agendamentos, estão aqui.{'\n'}
          Você vai precisar de um café para começar{'\n'}o seu dia.
        </Title>

        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
      </Content>

      <CarList>
        <FlatList
          data={cars}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: CarProps) => item.id}
          renderItem={({ item }) => <Car data={item.car} />}
        />
      </CarList>
    </Container>
  );
};

export default MyCars;
