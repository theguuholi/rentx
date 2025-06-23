import { Container, Details, Name, Brand, About, Rent, Period, Price, Type, CarImage } from "./styles";
import { CartDTO } from "../../dtos/CartDTO";
import { RectButtonProps } from "react-native-gesture-handler";
import { getAcessoryIcon } from "../../utils/getAcessoryIcon";

interface CarProps extends RectButtonProps {
  data: CartDTO;
}

const Car = ({ data, ...rest }: CarProps) => {
  const MotorIcon = getAcessoryIcon(data.fuel_type as any);
  
  return (
    <Container {...rest} testID="car-container">
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
            <MotorIcon />
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