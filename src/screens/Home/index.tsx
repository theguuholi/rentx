import { StatusBar } from "expo-status-bar";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";
import { CartDTO } from "../../dtos/CartDTO";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const cars = [
    {
      id: '1',
      brand: 'Ford',
      name: 'Mustang',
      rent: {
        period: 'Ao dia',
        price: 580
      },
      thumbnail: 'https://pngimg.com/d/mustang_PNG47.png'
    },
    {
      id: '2',
      brand: 'Chevrolet',
      name: 'Camaro',
      rent: {
        period: 'Ao dia',
        price: 580
      },
      thumbnail: 'https://pngimg.com/d/camaro_PNG10164.png'
    },
    {
      id: '3',
      brand: 'Porsche',
      name: '911 Carrera',
      rent: {
        period: 'Ao dia',
        price: 1000
      },
      thumbnail: 'https://pngimg.com/d/porsche_PNG10164.png'
    }
  ]

  const handleCarDetails = (car: CartDTO) => {
    navigation.navigate('CarDetails', { car });
  }

  return (
    <Container testID="home">
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={cars}
        keyExtractor={(item: CartDTO) => item.id}
        renderItem={({ item }: { item: CartDTO }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
      />
    </Container>
  );
};

export default Home;    