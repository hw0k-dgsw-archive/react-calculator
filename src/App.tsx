import React from 'react';
import styled from 'styled-components';
import CalculatorContainer from './containers/CalculatorContainer';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => (
  <Wrapper>
    <CalculatorContainer />
  </Wrapper>
);

export default App;
