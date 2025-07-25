import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

const PasswordInput = ({ iconName, value, ...rest }: Props) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!value);
    };

    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text} />
            </IconContainer>
            <InputText
                {...rest}
                secureTextEntry={!isPasswordVisible}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                isFilled={isFilled}
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