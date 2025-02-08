import React from 'react'
import NbrButton from './NbrButton';
import OperatorButton from './OperatorButton';

function OperatorPanel({changeOperator}) {
    let operations = ["+","-","*","/"];
    let index =0;
  return (
    <div className="numbers">
        {
            operations.map((op) => (
                <OperatorButton key={index++} 
                           value={op}
                           changeOperator={changeOperator}></OperatorButton>
            ))
        }
    </div>
  )
}

export default OperatorPanel