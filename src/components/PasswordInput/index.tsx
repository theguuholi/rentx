import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
}

const PasswordInput = ({ iconName, ...rest }: Props) => {
    const theme = useTheme();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (
        <Container>
            <IconContainer>
                <Feather name={iconName} size={24} color={theme.colors.text} />
            </IconContainer>
            <InputText
                {...rest}
                secureTextEntry={!isPasswordVisible}
            />
            <IconContainer>
                <BorderlessButton onPress={() => { setIsPasswordVisible(!isPasswordVisible) }}>
                    <Feather name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color={theme.colors.text} />
                </BorderlessButton>
            </IconContainer>
        </Container>
    );
};

export default PasswordInput;