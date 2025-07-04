import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }: { color: string }) => color};
`;

export const Title = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_secondary};
`;
