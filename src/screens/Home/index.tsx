import { StatusBar } from "expo-status-bar";
import { Container, Header, HeaderContent, TotalCars } from "./styles";
import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";

const Home = () => {
  const car = {
    brand: 'Ford',
    name: 'Mustang',
    rent: {
      period: 'Ao dia',
      price: 580
    },
    thumbnail: 'https://pngimg.com/d/mustang_PNG47.png'
  }

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={car} />
      <Car data={car} />
      <Car data={car} />
      <Car data={car} />
      <Car data={car} />
    </Container>
  );
};

export default Home;    