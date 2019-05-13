import React from 'react';
import styled from 'styled-components';

import Field from './../components/Field';
import Cell from './../components/Cell';

interface ITextProps {
  isWeak?: boolean;
}

const Text = styled.div`
  margin: 3rem 0;
  color: ${(p: ITextProps) => p.isWeak && `var(--oc-gray-6)`};
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
  currentOp: Operator;
}

class CalculatorContainer extends React.Component<{}, ICalculatorState> {
  state: ICalculatorState = {
    value: 0,
    stored: 0,
    currentOp: '?'
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      value: parseInt(e.target.value)
    });
  }

  handleNumberClick = (number: number) => {
    this.setState({
      ...this.state,
      value: parseInt(this.state.value.toString() + number.toString())
    });
  }

  handleOperatorClick = (operator: Operator) => {
    const { value, stored, currentOp } = this.state;

    if (currentOp !== '?') {
      this.setState({
        value: 0,
        stored: eval(`${stored} ${currentOp} ${value}`),
        currentOp: operator
      });
    }
    else {
      this.setState({
        value: 0,
        stored: value,
        currentOp: operator
      });
    }
  }

  handleRemove = () => {
    const valueStr = this.state.value.toString();

    this.setState({
      ...this.state,
      value: valueStr.length === 1
        ? 0
        : parseInt(valueStr.substring(0, valueStr.length - 1))
    });
  }

  handlePoint = () => {
    alert('추후 구현할 예정');
  }

  handleOperate = () => {
    const { value, stored, currentOp } = this.state;

    this.setState({
      value: eval(`${stored} ${currentOp} ${value}`),
      stored: 0,
      currentOp: '?'
    });
  }
  
  render() {
    const { value, stored, currentOp } = this.state;
    return (
      <React.Fragment>
        <Text>계산기</Text>
        <Wrapper>
          <Field value={value} stored={stored} currentOp={currentOp} onChange={this.handleChange} />
          <Grid>
            <Cell text="CE" onClick={() => this.setState({...this.state, value: 0})} />
            <Cell text="C" onClick={() => this.setState({value: 0, stored: 0, currentOp: '?'})} />
            <Cell text="<-" onClick={() => this.handleRemove()} />
            <Cell text="/" onClick={() => this.handleOperatorClick('/')} />
            <Cell text="7" onClick={() => this.handleNumberClick(7)} />
            <Cell text="8" onClick={() => this.handleNumberClick(8)} />
            <Cell text="9" onClick={() => this.handleNumberClick(9)} />
            <Cell text="*" onClick={() => this.handleOperatorClick('*')} />
            <Cell text="4" onClick={() => this.handleNumberClick(4)} />
            <Cell text="5" onClick={() => this.handleNumberClick(5)} />
            <Cell text="6" onClick={() => this.handleNumberClick(6)} />
            <Cell text="-" onClick={() => this.handleOperatorClick('-')} />
            <Cell text="1" onClick={() => this.handleNumberClick(1)} />
            <Cell text="2" onClick={() => this.handleNumberClick(2)} />
            <Cell text="3" onClick={() => this.handleNumberClick(3)} />
            <Cell text="+" onClick={() => this.handleOperatorClick('+')} />
            <Cell text="±" onClick={() => this.setState({...this.state, value: -value})} />
            <Cell text="0" onClick={() => this.handleNumberClick(0)} />
            <Cell text="." onClick={() => this.handlePoint()} />
            <Cell text="=" onClick={() => this.handleOperate()} />
          </Grid>
        </Wrapper>
        <Text isWeak={true}>Made by hw0k</Text>
      </React.Fragment>
    );
  }
}

export default CalculatorContainer;
