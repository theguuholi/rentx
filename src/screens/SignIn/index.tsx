import React, { useState } from 'react';
import { Container, Header, Subtitle, Title, Footer, Form } from './styles';
import { Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import { useTheme } from 'styled-components';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';

const Signin = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log(email, password);
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
            <Input iconName='mail'
              placeholder='E-mail'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail} />
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={setPassword} />
          </Form>

          <Footer>
            <Button title='Login' onPress={handleSignIn} />
            <Button title='Criar conta gratuita' light={true} color={theme.colors.background_secondary} onPress={() => { }} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signin;