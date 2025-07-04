import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_primary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 38}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const AnimatedScrollView = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_400};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  line-height: ${RFValue(25)}px;

  margin-top: 23px;
`;

export const Acessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_primary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
