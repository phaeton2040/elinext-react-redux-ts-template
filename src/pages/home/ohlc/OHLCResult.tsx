import React from 'react';
import { CalculatedValue } from './styles';

export interface OHLCProps {
    min: number;
    max: number;
}

const OHLCResult: React.FunctionComponent<OHLCProps> = ({min, max}) => {
    return (
        <div>
            <CalculatedValue>Max H: {max}</CalculatedValue>
            <CalculatedValue>Lowest L: {min}</CalculatedValue>
        </div>
    )
}

export default OHLCResult;
