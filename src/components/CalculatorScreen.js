import { useEffect, useRef, useState } from 'react';
import Consumer from '../CalculatorContext';
import { toNumberFormat } from '../supports/CalculatorSupport';

function CalculatorScreen({ equals }) {
    const ref = useRef(null);
    const [scale, setScale] = useState(1);
    const [childWidth, setChildWidth] = useState(0);
    const [output, setOutput] = useState(equals || '');

    useEffect(() => {
        let actualScale =
            ref.current.offsetWidth / ref.current.children[0].offsetWidth;
        if (actualScale < 1) setScale(actualScale);
        else setScale(1);
    }, [childWidth]);

    useEffect(() => {
        setChildWidth(ref.current.children[0].offsetWidth);
    }, [output]);

    useEffect(() => {
        setOutput(equals);
    }, [equals]);

    return (
        <Consumer>
            {(ctx) => {
                return (
                    <div ref={ref} className="screen">
                        <span
                            className="text"
                            style={{ transform: `scale(${scale}, ${scale})` }}
                        >
                            {toNumberFormat(ctx.equals)}
                        </span>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default CalculatorScreen;
