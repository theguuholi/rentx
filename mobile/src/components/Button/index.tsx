import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';
import { useTheme } from 'styled-components/native';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  loading = false,
  light = false,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <Container
      color={color || theme.colors.main}
      {...rest}
      testID='button-container'
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} size='small' />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
