import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    width: 80px;
    height: 56px;
    align-items: center;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.shape_dark};
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.shape};
    font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.primary_500};
`;