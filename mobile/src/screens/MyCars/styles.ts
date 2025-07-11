import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
  font-size: ${RFValue(18)}px;
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.shape};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_400};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(25)}px;
  margin-top: 24px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 24px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_400};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.title};
`;

export const CarList = styled.View`
  padding: 24px 0;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px 24px;
  margin-top: -10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.secondary_500};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text_detail};
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_400};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.title};
`;
