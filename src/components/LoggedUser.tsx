import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .name {
    color: #272727;
    font-size: 1.1rem;
  }
`;

interface Props {
  name: string;
}

const LoggedUser = ({ name }: Props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} name`;
  }, [count]);
  return (
    <Styles>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <span className='name'>{name + count}</span>
      </div>
    </Styles>
  );
};
export default LoggedUser;
