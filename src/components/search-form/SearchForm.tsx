import React, { Component } from 'react';
import { FieldWrapper, FormWrapper, Header, ErrorInput, Input, SubmitButton, Error } from './styles';
import { SubmissionError, Field, reduxForm, WrappedFieldProps, InjectedFormProps } from "redux-form";
import isEmpty from 'lodash/isEmpty';
import { validate } from "./validate";

export interface SearchFormValues {
    from: string | number;
    to: string | number;
}

const renderField: React.FunctionComponent<WrappedFieldProps & { label: string, type: string }> = (
    { input, label, type, meta: { touched, error } }
    ) => (
    <FieldWrapper>
        {error ? <ErrorInput {...input}
               type={type}
               name={label}
               placeholder={label} /> : <Input {...input}
            type={type}
            name={label}
            placeholder={label} /> }
        {touched && (error && <Error>{error}</Error>)}
    </FieldWrapper>
)

const SearchForm = (props: InjectedFormProps & { onSubmit?: (values: SearchFormValues) => void }) => {
    const { error, handleSubmit, pristine, reset, submitting, onSubmit } = props;
    const submit = handleSubmit((values) => {
        const errors = validate(values as SearchFormValues);

        if (!isEmpty(errors)) {
            throw new SubmissionError(errors);
        } else {
            onSubmit!(values as SearchFormValues);
        }
    })
    return (
        <div>
            <Header>OHLC max - min Calculator</Header>
            <form onSubmit={submit}>
                <FormWrapper>
                    <Field
                        name="from"
                        type="text"
                        component={renderField}
                        label="Year from"
                    />
                    <Field
                        name="to"
                        type="text"
                        component={renderField}
                        label="Year to"
                    />
                    <FieldWrapper>
                        <SubmitButton>Get OHLC</SubmitButton>
                    </FieldWrapper>
                </FormWrapper>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'search'
})(SearchForm);
