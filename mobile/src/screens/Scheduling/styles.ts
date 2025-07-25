import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { css, DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.header};

  justify-content: center;

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.shape};
  ${({ theme, selected }: { theme: DefaultTheme; selected: boolean }) =>
    !selected
      ? css`
          border-bottom-width: 1px;
          border-bottom-color: ${theme.colors.text};
          padding-bottom: 5px;
        `
      : css`
          border-bottom-width: 0px;
        `}

  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Footer = styled.View`
  padding: 24px;
`;
