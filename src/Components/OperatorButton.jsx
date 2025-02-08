import React from 'react'

function OperatorButton({value, changeOperator}) {
  return (
    <button onClick={()=> changeOperator(value)}>{value}</button>
  )
}

export default OperatorButton