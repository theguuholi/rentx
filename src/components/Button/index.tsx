import { Container, Title } from "./styles";

interface Props {
    title: string;
    color?: string;
}

const Button = ({ title, color, ...rest }: Props) => {
    return (
        <Container color={color} {...rest} testID="button-container">
            <Title>
                {title}
            </Title>
        </Container>
    )
}

export default Button;