import { createContext, useEffect, useState } from "react";

const { Provider, Consumer } = createContext();

const Operators = {
    '÷': (leftOperand, rightOperand) => leftOperand / rightOperand,
    '*': (leftOperand, rightOperand) => leftOperand * rightOperand,
    '+': (leftOperand, rightOperand) => leftOperand + rightOperand,
    '-': (leftOperand, rightOperand) => leftOperand - rightOperand,
    '=': (leftOperand, rightOperand) => leftOperand
}

const Utils = {
    'AC': (util, payload) => {
        payload = '';
        return payload;
    },
}

function CalculatorContext({outputValue, operatorValue, leftOperandValue, rightOperandValue, equalsValue, children}) {

    const [ leftOperand, setLeftOperand] = useState('')
    const [ operator, setOperator ] = useState(null)
    const [ rightOperand, setRightOperand] = useState('')
    const [ equals, setEquals ] = useState(false)

    useEffect(() => {
        setLeftOperand(leftOperandValue)
    }, [leftOperandValue])

    useEffect(() => {
        setOperator(operatorValue)
    }, [operatorValue]) 

    useEffect(() => {
        setRightOperand(rightOperandValue)
    }, [rightOperandValue])

    useEffect(() => {
        setEquals(equalsValue)
    }, [equalsValue])

    return (
        <Provider
            value={{
                leftOperand,
                operator,
                rightOperand,
                equals
            }}
        >
            {children}
        </Provider>
    );

}

export { CalculatorContext, Operators, Utils };

export default Consumer;
