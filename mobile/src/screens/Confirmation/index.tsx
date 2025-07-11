import { StatusBar, useWindowDimensions } from 'react-native';
import { Container, Content, Footer, Message, Title } from './styles';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Props {
  title: string;
  message: string;
  nextScreenRoute: string;
}

const Confirmation = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Props;

  const handleConfirmRental = () => {
    navigation.navigate(nextScreenRoute);
  };

  return (
    <Container testID='scheduling-complete'>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
