import { useEffect, useState } from "react";

function CalculatorScreen({ value }) 
{
    const [ text, setText ] = useState(value)

    // autoscale effect
    useEffect(() => {
        autoScaleText();
    })

    function autoScaleText() {
        setText(value)
    }

    return <div className="screen"><span className="text">{text}</span></div>;
}

export default CalculatorScreen
