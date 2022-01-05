import React, { useCallback, useState, useEffect } from "react";
import CalculatorButton from "./components/CalculatorButton";
import CalculatorScreen from "./components/CalculatorScreen";
import "./App.css";

import { CalculatorContext } from "./CalculatorContext";
import {
  processToOperator,
  processToUtil,
  clone,
  hasOperator,
  ComputedExpression,
} from "./supports/CalculatorSupport";

const initialState = {
  leftOperand: "",
  operator: "",
  rightOperand: "",
  util: null,
};

function App() {
  const [expression, setExpression] = useState(initialState);
  const [equals, setEquals] = useState(0);

  useEffect(() => {
    setEquals(ComputedExpression(expression));
  }, [expression]);

  const emitHandleClick = useCallback(
    (val) => {
      const operand = !hasOperator(expression) ? "leftOperand" : "rightOperand";

      const handleDigit = () => {
        setExpression({
          ...expression,
          ...{ [operand]: expression[operand] || "" + val.label },
        });
      };

      const handleUtil = () => {
        const output = processToUtil(val.label, equals);
        setOuputAndExpression(output);
      };

      const handleEquals = () => {
        let outputExpression = clone(expression);
        const output = processToOperator(outputExpression);
        if (output) setOuputAndExpression(output);
      };

      if (val.type === "digit") {
        handleDigit();
      } else if (val.type === "util") {
        handleUtil();
      } else if (val.label === "=") {
        handleEquals();
      } else {
        setExpression({ ...expression, ...{ [val.type]: val.label } });
      }
    },
    [equals, expression]
  );

  // will set the current output to the leftOperand
  // after util or operator triggers
  function setOuputAndExpression(output, payload = {}) {
    setEquals(output);
    setExpression({ ...initialState, ...{ leftOperand: output }, ...payload });
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

          <CalculatorButton
            type="util"
            label="AC"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="util"
            label="±"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="util"
            label="%"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="operator"
            label="÷"
            handleClick={emitHandleClick}
          />

          <CalculatorButton
            type="digit"
            label="7"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="8"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="9"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="operator"
            label="×"
            handleClick={emitHandleClick}
          />

          <CalculatorButton
            type="digit"
            label="4"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="5"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="6"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="operator"
            label="-"
            handleClick={emitHandleClick}
          />

          <CalculatorButton
            type="digit"
            label="1"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="2"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="3"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="operator"
            label="+"
            handleClick={emitHandleClick}
          />

          <CalculatorButton
            type="digit"
            className="zero"
            label="0"
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="digit"
            label="."
            handleClick={emitHandleClick}
          />
          <CalculatorButton
            type="operator"
            label="="
            handleClick={emitHandleClick}
          />
        </CalculatorContext>
      </div>
    </div>
  );
}

export default App;
