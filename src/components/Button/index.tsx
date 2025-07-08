import { ActivityIndicator } from 'react-native';
import { Container, Title } from './styles';
import { useTheme } from 'styled-components/native';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <Container
      color={color || theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled && !loading ? 1 : 0.5 }}
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
