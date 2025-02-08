import React from 'react'
import NbrButton from './NbrButton'

function NumberPanel({setNumber, oldValue, action}) {
    let nbrs = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className="numbers">
        {
            nbrs.map((nbr) => (
                <NbrButton key={nbr} 
                           value={nbr} 
                           setNumber={setNumber}
                           action={action}
                           oldValue={oldValue}></NbrButton>
            ))
        }

        <button onClick={()=> setNumber(0)}>Clear</button>
    </div>
  )
}

export default NumberPanel