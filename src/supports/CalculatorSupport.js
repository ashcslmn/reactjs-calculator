import { Operators, Utils } from "../CalculatorContext";

function processToOperator(exp) {
  if (Operators.hasOwnProperty(exp.operator)) {
    return Operators[exp.operator](
      parseFloat(exp.leftOperand),
      parseFloat(exp.rightOperand)
    );
  }
}

function processToUtil(util, payload) {
  if (Utils.hasOwnProperty(util)) {
    return Utils[util](parseFloat(payload));
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function hasOperator(expression) {
  return expression.operator !== "";
}

function ComputedExpression(exp) {
  return (
    Object.values(exp)
      .filter((item) => /^-?[0-9]\d*(\.\d+)?$/.test(item))
      .at(-1) || 0
  );
}

export {
  processToOperator,
  processToUtil,
  clone,
  hasOperator,
  ComputedExpression,
};
