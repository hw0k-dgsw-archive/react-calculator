import React from 'react';
import styled from 'styled-components';

interface IFieldProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
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
    padding: 2rem 0.7rem 0.5rem;
  `
};

const Field: React.FC<IFieldProps> = (props) => {
  const { value, onChange } = props;
  return (
    <S.Wrapper>
      <S.Input type="number" value={value} onChange={onChange} />
    </S.Wrapper>
  );
};

export default Field;
