import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles';
import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

const Input = ({ iconName, ...rest }: Props) => {
    const theme = useTheme();
    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={24} color={theme.colors.text} />
            </IconContainer>
            <InputText
                {...rest}
            />
        </Container>
    );
};

export default Input;