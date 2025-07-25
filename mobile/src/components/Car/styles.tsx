import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_detail};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.main};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
