import React from 'react';
import './check-value.styles.scss'

const CheckValue = ({children}) => {
  return (
    <h1 className='check-value'>
      {children}
    </h1>
  );
};

export default CheckValue;