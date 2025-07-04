import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CarDetails from '../screens/CarDetails';
import SchedulingDetails from '../screens/SchedulingDetails';
import SchedulingComplete from '../screens/SchedulingComplete';
import Scheduling from '../screens/Scheduling';
import MyCars from '../screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
};

export default StackRoutes;
