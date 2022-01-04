function CalculatorButton(props) {

    const className = props.type + (props.className ? ' ' + props.className : '');
  
    return <button type="button" onClick={() => props.handleClick({ type:props.type, label: props.label })} className={className}>{props.label}</button>;
}

export default CalculatorButton