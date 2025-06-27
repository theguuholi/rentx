import { StatusBar, useWindowDimensions } from 'react-native';
import { Container, Content, Footer, Message, Title } from './styles';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import ConfirmButton from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const handleConfirmRental = () => {
    navigation.navigate('Home');
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

        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
