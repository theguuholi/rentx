import { BackButton } from '../../../components/BackButton';
import { useNavigation, useRoute } from '@react-navigation/native';
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
  Alert,
} from 'react-native';
import theme from '../../../styles/theme';
import { useState } from 'react';
import * as Yup from 'yup';

const SecondStep = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params as {
    user: { name: string; email: string; driverLicense: string };
  };

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = async () => {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha é obrigatória'),
        passwordConfirm: Yup.string()
          .required('Confirmação de senha é obrigatória')
          .oneOf([Yup.ref('password')], 'Senhas não conferem'),
      });

      const data = { password, passwordConfirm };
      await schema.validate(data);
      console.log(user);
      console.log(data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      }
    }
  };

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

            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput
              iconName='lock'
              placeholder='Repetir senha'
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            title='Cadastrar'
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondStep;
