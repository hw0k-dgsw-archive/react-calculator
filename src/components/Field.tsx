import React from 'react';
import styled from 'styled-components';

interface IFieldProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
  Input: styled.input`
    text-align: right;
  `,
};

const Field: React.FC<IFieldProps> = (props) => {
  const { value, onChange } = props;
  return (
    <div>
      <S.Input type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default Field;
