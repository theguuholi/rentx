import { Container, Details, Name, Brand, About, Rent, Period, Price, Type, CarImage } from "./styles";
import GasolineSvg from '../../assets/gasoline.svg';
import { CartDTO } from "../../dtos/CartDTO";
import { RectButtonProps } from "react-native-gesture-handler";

interface CarProps extends RectButtonProps {
  data: CartDTO;
}

const Car = ({ data, ...rest }: CarProps) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>
          {data.brand}
        </Brand>
        <Name>
          {data.name}
        </Name>

        <About>

          <Rent>
            <Period>
              {data.rent.period}
            </Period>
            <Price>
              R$ {data.rent.price}
            </Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        testID="car-image"
        source={{ uri: data.thumbnail }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default Car;    