import React from 'react';
import './input-block.styles.scss'

const InputBlock = ({children}) => {
  return (
    <div className='input-block-container'>
      {children}
    </div>
  );
};

export default InputBlock;