import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import SchedulingDetails from '../screens/SchedulingDetails';
import Confirmation from '../screens/Confirmation';
import Scheduling from '../screens/Scheduling';
import MyCars from '../screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

const StackAppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} options={{ gestureEnabled: false }} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
};

export default StackAppRoutes;
