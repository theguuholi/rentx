import React from 'react';

import loadAnimation from '../../assets/load_animation.json';
import { Container } from './styles';
import LottieView from 'lottie-react-native';

export function LoadAnimation() {
  return (
    <Container>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        resizeMode='contain'
        style={{
          height: 200,
          width: 200
        }}
      />
    </Container>
  );
}