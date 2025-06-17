import { BackButton } from "../../components/BackButton";
import { Container, Header } from "./styles";

const CarDetails = () => {
    return (
        <Container testID="car-details">
            <Header>
                <BackButton onPress={() => { }} />
            </Header>
        </Container>
    )
}

export default CarDetails;