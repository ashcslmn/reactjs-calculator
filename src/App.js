import { useState } from 'react';
import './App.css';
import CalculatorButton from './components/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen';

function App() {

  const [value, setValue ] = useState(0)

  const emitHandleClick = (val) => {
    if (val.type !== 'util') {
      setValue(value + val.label)
    }
  };

  return (
    <div className="App">
      <div id="calculator">
        <CalculatorScreen value={value} />

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
