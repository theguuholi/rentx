import { StatusBar } from 'expo-status-bar';
import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars,
} from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import Car from '../../components/Car';
import { CartDTO } from '../../dtos/CartDTO';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../styles/theme';

const Home = () => {
  const navigation = useNavigation<any>();

  const [cars, setCars] = useState<CartDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await api.get('/cars');
      setCars(response.data);
    } catch (error) {
      // Handle error silently or implement proper error handling
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleCarDetails = (car: CartDTO) => {
    navigation.navigate('CarDetails', { car });
  };

  return (
    <Container testID='home'>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item: CartDTO) => item.id}
          renderItem={({ item }: { item: CartDTO }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={() => navigation.navigate('MyCars')}>
        <Ionicons name='car-sport' size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
