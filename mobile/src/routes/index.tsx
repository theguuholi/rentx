import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';
import AppTabRoutes from './app.tab.routes';

const Routes = () => {
  const { user } = useAuth();

  const isAuthenticated = !!user;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
