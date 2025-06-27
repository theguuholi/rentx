import { Container, Title } from './styles';
import { useTheme } from 'styled-components/native';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color, onPress, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container
      color={color || theme.colors.main}
      onPress={onPress}
      {...rest}
      testID='button-container'
    >
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
