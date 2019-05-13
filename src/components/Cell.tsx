import React from 'react';
import styled from 'styled-components';

interface ICellProps {
  text: string;
  onClick?: () => void
}

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.4s;
  background-color: var(--oc-white);
  border-top: 1px solid var(--oc-gray-2);
  border-right: 1px solid var(--oc-gray-2);

  &:nth-child(4n) {
    border-right: none;
  }

  &:hover {
    cursor: pointer;
    background-color: var(--oc-gray-2);
  }
`;

const Cell: React.FC<ICellProps> = props => {
  const { text, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      {text}
    </Wrapper>
  );
};

export default Cell;
