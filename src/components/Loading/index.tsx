import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const Loading = () => {
  return (
    <Container testID='loading'>
      <ActivityIndicator size='large' color='#DC1637' />
    </Container>
  );
};

export default Loading;
