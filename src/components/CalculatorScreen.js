import Consumer  from "../CalculatorContext"

function CalculatorScreen() {
    return (
        <Consumer>
            {ctx => {
                return (
                    <div className="screen">
                        <span className="text">{ctx.equals}</span>
                    </div>
                )
            }}
        </Consumer>
    );
 
}

export default CalculatorScreen
