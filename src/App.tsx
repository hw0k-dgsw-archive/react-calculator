import React from 'react';
import styled from 'styled-components';
import CalculatorContainer from './containers/CalculatorContainer';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  background-color: var(--oc-gray-0);
`;

const App: React.FC = () => (
  <Wrapper>
    <CalculatorContainer />
  </Wrapper>
);

export default App;
