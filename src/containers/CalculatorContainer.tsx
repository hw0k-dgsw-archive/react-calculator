import React from 'react';
import styled from 'styled-components';

import Field from './../components/Field';
import Cell from './../components/Cell';

const Text = styled.div`
  margin: 3rem 0;
`;

const Wrapper = styled.div`
  border: 1px solid var(--oc-gray-3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

interface ICalculatorState {
  value: number;
  stored: number;
}

class CalculatorContainer extends React.Component<{}, ICalculatorState> {
  state = {
    value: 0,
    stored: 0
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: parseInt(e.target.value)
    });
  }
  
  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
      <Text>계산기</Text>
      <Wrapper>
        <Field value={value} onChange={this.handleChange} />
        <Grid>
          <Cell text="CE" />
          <Cell text="C" />
          <Cell text="&times;" />
          <Cell text="/" />
          <Cell text="7" />
          <Cell text="8" />
          <Cell text="9" />
          <Cell text="*" />
          <Cell text="4" />
          <Cell text="5" />
          <Cell text="6" />
          <Cell text="-" />
          <Cell text="1" />
          <Cell text="2" />
          <Cell text="3" />
          <Cell text="+" />
          <Cell text="±" />
          <Cell text="0" />
          <Cell text="." />
          <Cell text="=" />
        </Grid>
      </Wrapper>
      <Text>Made by hw0k</Text>
      </React.Fragment>
    );
  }
}

export default CalculatorContainer;
