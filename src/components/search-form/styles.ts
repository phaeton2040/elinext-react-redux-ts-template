import styled from "styled-components";

export const FieldWrapper = styled.div`
    margin-bottom: 10px;
    padding: 0 10px;
`;
export const Header = styled.h2`
    text-transform: uppercase;
    padding: 10px 20px;
`;
export const FormWrapper = styled.div`
    padding: 0 10px;
`;
export const SubmitButton = styled.button`
    background-color: #d0d941;
    color: white;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 8px;
`;
export const Input = styled.input`
    background-color: #f8f8f8;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 8px;
`;
export const ErrorInput = styled(Input)`
    border: 1px solid crimson;
`
export const Error = styled.span`
    color: crimson;
    font-size: 12px;
`
