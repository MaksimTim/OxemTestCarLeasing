import React from 'react';
import './total.styles.scss'

const Total = ({children}) => {
  return (
    <div className='total-container'>
      {children}
    </div>
  );
};

export default Total;