import React from 'react';

export interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FunctionComponent<ErrorMessageProps> = ({ message}) => {
    return (
        <div style={{color: "crimson", fontWeight: "bold"}}>{message}</div>
    )
}
