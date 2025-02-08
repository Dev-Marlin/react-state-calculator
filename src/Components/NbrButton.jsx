import React from 'react'

function NbrButton({value, setNumber, number}) {
  return (
    <button onClick={()=> setNumber(number*10 + value)}>{value}</button>
  )
}

export default NbrButton