import { Container } from "../../screens/Home/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

interface BackButtonProps extends BorderlessButtonProps {
    color?: string;
}

const BackButton = ({ color, ...rest }: BackButtonProps) => {
    const theme = useTheme();

    return (
        <Container {...rest} testID="back-button">
            <MaterialIcons name="chevron-left" size={24} color={color || theme.colors.text} />
        </Container>
    )
}

export { BackButton };