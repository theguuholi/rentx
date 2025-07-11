import { createStackNavigator } from '@react-navigation/stack';
import Confirmation from '../screens/Confirmation';
import Splash from '../screens/Splash';
import Signin from '../screens/SignIn';
import FirstStep from '../screens/SignUp/FirstStep';
import SecondStep from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Screen name='Splash' component={Splash} />
      <Screen name='SignIn' component={Signin} />
      <Screen name='SignUpFirstStep' component={FirstStep} />
      <Screen name='SignUpSecondStep' component={SecondStep} />
      <Screen name='Confirmation' component={Confirmation} />
    </Navigator>
  );
};

export default AuthRoutes;
