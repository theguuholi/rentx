import React, { useState } from 'react';
import { Container, Header, Subtitle, Title, Footer, Form } from './styles';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/Button';
import { useTheme } from 'styled-components';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

const Signin = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate({ email, password });

      await signIn({ email, password });
      Alert.alert('Tudo certo', 'Você está logado!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais.'
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView behavior='height' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <Subtitle>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </Subtitle>
          </Header>
          <Form>
            <Input
              iconName='mail'
              placeholder='E-mail'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button title='Login' onPress={handleSignIn} />
            <Button
              title='Criar conta gratuita'
              light={true}
              color={theme.colors.background_secondary}
              onPress={() => navigation.navigate('SignUpFirstStep')}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;
