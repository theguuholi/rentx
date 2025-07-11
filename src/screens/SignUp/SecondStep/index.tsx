import { BackButton } from '../../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles';
import Bullet from '../../../components/Bullet';
import PasswordInput from '../../../components/PasswordInput';
import Button from '../../../components/Button';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../../../styles/theme';

const SecondStep = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={() => navigation.goBack()} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil</Subtitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <PasswordInput iconName='lock' placeholder='Senha' />

            <PasswordInput iconName='lock' placeholder='Repetir senha' />
          </Form>

          <Button title='Cadastrar' color={theme.colors.success} onPress={() => {}} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondStep;
