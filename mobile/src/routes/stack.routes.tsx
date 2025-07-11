import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import SchedulingDetails from '../screens/SchedulingDetails';
  import Confirmation from '../screens/Confirmation';
import Scheduling from '../screens/Scheduling';
import MyCars from '../screens/MyCars';
import Splash from '../screens/Splash';
import Signin from '../screens/SignIn';
import FirstStep from '../screens/SignUp/FirstStep';
import SecondStep from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SignIn' component={Signin} />
      <Screen name='SignUpFirstStep' component={FirstStep} />
      <Screen name='SignUpSecondStep' component={SecondStep} />
      <Screen name='Splash' component={Splash} />
      <Screen name='Home' component={Home} options={{ gestureEnabled: false }} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
