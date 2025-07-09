import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
`;

export const IconContainer = styled.View<{ isFocused: boolean }>`
    width: 55px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.background_secondary};
    border-right-width: 2px;
    border-right-color: ${({ theme }) => theme.colors.background_secondary};

    ${({ isFocused }) => (isFocused) && css`
        border-bottom-color: ${({ theme }) => theme.colors.main};
        border-bottom-width: 2px;
        border-right-width: 2px;
        border-right-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const InputText = styled(TextInput)`
    flex: 1;
    font-size: ${RFValue(15)}px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    padding: 0 23px;

    ${({ isFocused }) => (isFocused) && css`
        border-bottom-width: 2px;
        border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;