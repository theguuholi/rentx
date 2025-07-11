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
import { CarDTO } from '../../dtos/CarDTO';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { BackHandler } from 'react-native';
import { LoadAnimation } from '../../components/LoadAnimation';

const Home = () => {
  const navigation = useNavigation<any>();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await api.get('/cars');
      console.log(response.data);
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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, []);

  const handleCarDetails = (car: CarDTO) => {
    navigation.navigate('CarDetails', { car });
  };

  return (
    <Container testID='home'>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item: CarDTO) => item.id}
          renderItem={({ item }: { item: CarDTO }) => (
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
