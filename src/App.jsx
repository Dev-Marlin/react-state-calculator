import "./App.css"
import NumberPanel from "./Components/NumberPanel"
import OperatorPanel from "./Components/OperatorPanel"
import {React, useState} from 'react'

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  function Calculate()
  {
    switch(operator)
    {
      case "+":
        setResult(firstNumber+secondNumber);
        break;
      case "-":
        setResult(firstNumber-secondNumber);
        break;
      case "/":
        setResult(Math.round((firstNumber/secondNumber)*100)/100);
        break;
      case "*":
        setResult(firstNumber*secondNumber);
        break;
    }

    setFirstNumber(0);
    setSecondNumber(0);
  }

  function action(setNbr, oldValue, newValue)
  {
    if(oldValue.length == 1 && oldValue == 0)
    {
      setNbr(newValue);
    }
    else{
      setNbr((oldValue*10)+newValue);
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>

        <NumberPanel action={action} setNumber={setFirstNumber} oldValue={firstNumber}></NumberPanel>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <OperatorPanel changeOperator={setOperator}></OperatorPanel>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>

        <NumberPanel action={action} setNumber={setSecondNumber} oldValue={secondNumber}></NumberPanel>
      </div>

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={()=>Calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
