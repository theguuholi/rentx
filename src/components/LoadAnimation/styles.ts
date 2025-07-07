import LottieView from 'lottie-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadAnimation = styled(LottieView)`
  height: ${RFValue(200)}px;
`;