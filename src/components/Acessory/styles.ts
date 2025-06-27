import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 106px;
  height: 92px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.shape};
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
