import React from 'react';
import styled from 'styled-components';

import Field from './../components/Field';
import Cell from './../components/Cell';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

interface ICalculatorState {
  value: number;
}

class CalculatorContainer extends React.Component<{}, ICalculatorState> {
  state = {
    value: 0
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: parseInt(e.currentTarget.value)
    });
  }
  
  render() {
    const { value } = this.state;
    return (
      <div>
        <Field value={value} onChange={this.handleChange} />
        <Grid>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </Grid>
      </div>
    );
  }
}

export default CalculatorContainer;
