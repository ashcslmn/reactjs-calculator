import Consumer from '../CalculatorContext';

function CalculatorButton(props) {
    const className =
        props.type + (props.className ? ' ' + props.className : '');

    return (
        <Consumer>
            {(ctx) => {
                return (
                    <button
                        type="button"
                        onClick={() =>
                            props.handleClick({
                                type: props.type,
                                label: props.label,
                            })
                        }
                        className={`${className}${
                            props.label === ctx.operator ? ' selected' : ''
                        }`}
                    >
                        {props.label}
                    </button>
                );
            }}
        </Consumer>
    );
}

export default CalculatorButton;
