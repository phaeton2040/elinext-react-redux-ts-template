import React from 'react';
import { FieldWrapper, FormWrapper, Header, Input, SubmitButton } from './styles';

export const SearchForm: React.FunctionComponent<any> = () => {
    return (
        <div>
            <Header>OHLC Calculator</Header>
            <FormWrapper>
                <FieldWrapper>
                    <Input type="text" name='from' placeholder='Year from' />
                </FieldWrapper>
                <FieldWrapper>
                    <Input type="text" name='to' placeholder='Year to' />
                </FieldWrapper>
                <FieldWrapper>
                    <SubmitButton>Get OHLC</SubmitButton>
                </FieldWrapper>
            </FormWrapper>
        </div>
    )
}
