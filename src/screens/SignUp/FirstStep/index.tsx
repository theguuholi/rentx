import { BackButton } from '../../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { Container, Header, Steps, Title, Subtitle, Form, FormTitle } from './styles';
import Bullet from '../../../components/Bullet';

const FirstStep = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
        <Steps>
          <Bullet />
          <Bullet />
        </Steps>
      </Header>

      <Title>Crie sua{'\n'}conta</Title>
      <Subtitle>Faça seu cadastro de{'\n'}forma rapida e fácil</Subtitle>

      <Form>
        <FormTitle>1. Dados</FormTitle>
      </Form>
    </Container>
  );
};

export default FirstStep;
