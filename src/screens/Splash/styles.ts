import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: { theme: any }) => theme.colors.header};
`;
