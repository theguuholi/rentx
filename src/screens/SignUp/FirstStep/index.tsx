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
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useState } from 'react';
import * as Yup from 'yup';

const FirstStep = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const handleNextStep = async () => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        driverLicense: Yup.string().required('CNH é obrigatória'),
      });
  
      const data = { name, email, driverLicense };
      await schema.validate(data);
      navigation.navigate('SignUpSecondStep', { user: data });
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
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <Subtitle>Faça seu cadastro de{'\n'}forma rapida e fácil</Subtitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>

            <Input iconName='user' placeholder='Nome' onChangeText={setName} value={name} />

            <Input iconName='mail' placeholder='E-mail' keyboardType='email-address' onChangeText={setEmail} value={email} />

            <Input iconName='credit-card' placeholder='CNH' keyboardType='numeric' onChangeText={setDriverLicense} value={driverLicense} />
          </Form>

          <Button title='Próximo' onPress={handleNextStep} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FirstStep;
