import React from 'react';
import styled from 'styled-components';

interface IFieldProps {
  value: number;
  stored: number;
  currentOp: Operator;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column wrap;
  `,
  Text: styled.div`
    background-color: var(--oc-white);
    padding: 0.5rem 0.7rem;
    text-align: right;
    font-size: 0.75em;
    color: var(--oc-gray-6);
  `,
  Input: styled.input`
    flex: 1;
    text-align: right;
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: none;
    }

    border: 0;
    padding: 1rem 0.7rem 0.5rem;
  `
};

const Field: React.FC<IFieldProps> = (props) => {
  const { value, stored, currentOp, onChange } = props;
  return (
    <S.Wrapper>
      <S.Text>
        {
          currentOp !== '?'
            ? `${stored} ${currentOp}`
            : 'ㅤ'
        }
      </S.Text>
      <S.Input type="number" value={value} onChange={onChange} />
    </S.Wrapper>
  );
};

export default Field;
