import React, { useCallback, useState, useEffect } from 'react';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';
import './App.css';

import { CalculatorContext, Operators } from './CalculatorContext';

const initialState = { leftOperand: '', operator: '', rightOperand: '', util: null}

function App() {

  const [expression, setExpression] = useState(initialState)
  const [hasOperator, setHasOperator] = useState(false);
  const [equals, setEquals] = useState(0);

  useEffect(() => {
    if (expression.operator !== '') {
      setHasOperator(true)
    }
    setEquals(ComputedExpression(expression))
  }, [expression])

  const emitHandleClick = useCallback((val) => {
    const operand = !hasOperator ? 'leftOperand' : 'rightOperand';
    if (val.type === 'digit') {
      setExpression({ ...expression, ...{ [operand]: expression[operand] + val.label } })
    } else if (val.label === '=') {
      let outputExpression = JSON.parse(JSON.stringify(expression));
      const output = processCxt(outputExpression)
      if(output) {
        setEquals(output)
        setExpression({ ...initialState, ...{ leftOperand: output }})
        setHasOperator(false)
      }
    } else {
      setExpression({ ...expression, ...{ [val.type]: val.label } })
    }
    
  }, [ expression, hasOperator ]);

  function processCxt(exp) {
    if (Operators.hasOwnProperty(exp.operator)) {
        return Operators[exp.operator](parseFloat(exp.leftOperand), parseFloat(exp.rightOperand))
    }
  }

  function ComputedExpression(expression) {
    console.log('operator', expression.operator)
    let str = !hasOperator ? expression.leftOperand : expression.rightOperand
    console.log('str', str)
    return str !== '' ? str : 0;
  }

  return (
    <div className="App">
      <div id="calculator">
          <CalculatorContext 
            leftOperandValue={expression.leftOperand}
            operatorValue={expression.operator}
            rightOperandValue={expression.rightOperand}
            equalsValue={equals}
          >
            <CalculatorScreen />
          </CalculatorContext>
          <CalculatorButton type="util" label="AC" handleClick={emitHandleClick} />
          <CalculatorButton type="util" label="±" handleClick={emitHandleClick} />
          <CalculatorButton type="util" label="%" handleClick={emitHandleClick} />
          <CalculatorButton type="operator" label="÷" handleClick={emitHandleClick} />

          <CalculatorButton type="digit" label="7" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="8" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="9" handleClick={emitHandleClick} />
          <CalculatorButton type="operator" label="×" handleClick={emitHandleClick} />

          <CalculatorButton type="digit" label="4" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="5" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="6" handleClick={emitHandleClick} />
          <CalculatorButton type="operator" label="-" handleClick={emitHandleClick} />

          <CalculatorButton type="digit" label="1" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="2" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="3" handleClick={emitHandleClick} />
          <CalculatorButton type="operator" label="+" handleClick={emitHandleClick} />

          <CalculatorButton type="digit" className="zero" label="0" handleClick={emitHandleClick} />
          <CalculatorButton type="digit" label="." handleClick={emitHandleClick} />
          <CalculatorButton type="operator" label="=" handleClick={emitHandleClick} />
      </div>
    </div>
  );
}

export default App;
