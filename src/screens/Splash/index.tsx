import { Button, Dimensions, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Container } from './styles';
import { useEffect } from 'react';

const WIDTH = Dimensions.get('window').width;

const Splash = () => {
    const positionX = useSharedValue(0);

    const positionStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: positionX.value
            }]
        };
    });

    const handleAnimationPosition = () => {
        positionX.value = withTiming(Math.random() * (WIDTH - 100), { duration: 1000 });
    };

    return (
        <Container>
            <Animated.View style={[styles.container, positionStyle]} />
            <Button title='Entrar' onPress={handleAnimationPosition} />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
});

export default Splash;