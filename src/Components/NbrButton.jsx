import React from 'react'

function NbrButton({value, setNumber, oldValue, action}) {
  return (
    <button onClick={()=> action(setNumber, oldValue, value)}>{value}</button>
  )
}

export default NbrButton