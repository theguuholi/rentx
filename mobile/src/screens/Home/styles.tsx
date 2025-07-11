import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { DefaultTheme } from 'styled-components/native';
import { CartDTO } from '../../dtos/CartDTO';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.primary_400};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<CartDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 13px;
  right: 22px;

  border-radius: 30px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.main};
`;
