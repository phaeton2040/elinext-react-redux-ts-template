import React from 'react';
import { CalculatedValue } from './styles';

export interface OHLCProps {
    min?: number;
    max?: number;
    error?: string | never;
}

const OHLCResult: React.FunctionComponent<OHLCProps> = ({min, max, error}) => {
    return (
        <div>
            <CalculatedValue>Max: {max}</CalculatedValue>
            <CalculatedValue>Min: {min}</CalculatedValue>
        </div>
    )
}

export default OHLCResult;
