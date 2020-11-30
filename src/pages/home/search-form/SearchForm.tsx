import React from 'react';
import {
    FieldWrapper,
    FormWrapper,
    Header,
    Input,
    SubmitButton,
    Error
} from './styles';
import {
    SubmissionError,
    Field,
    reduxForm,
    WrappedFieldProps,
    InjectedFormProps
} from "redux-form";
import isEmpty from 'lodash/isEmpty';
import { validate } from "./validate";

export interface SearchFormValues {
    from: string | number;
    to: string | number;
}

const renderField: React.FunctionComponent<WrappedFieldProps & { label: string, type: string }> = (
    {input, label, type, meta: {touched, error}}
) => {
    return <FieldWrapper>
            <Input {...input}
                   type={type}
                   name={label}
                   style={{borderColor: error && touched ? 'crimson' : 'transparent' }}
                   placeholder={label}/>
        {touched && (error && <Error>{error}</Error>)}
    </FieldWrapper>
};

interface SearchFormProps {
    onSubmit: (values: SearchFormValues) => any;
}

const SearchForm = (props: InjectedFormProps & SearchFormProps) => {
    const {handleSubmit, onSubmit, invalid} = props;
    const submit = handleSubmit((values: {}) => {
        const errors = validate(values as SearchFormValues);

        if (!isEmpty(errors)) {
            throw new SubmissionError(errors);
        } else {
            onSubmit!(values as SearchFormValues);
        }
    });
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
                        <SubmitButton disabled={invalid}>Get OHLC</SubmitButton>
                    </FieldWrapper>
                </FormWrapper>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'search',
    initialValues: { from: '2010', to: '2020' },
    validate
})(SearchForm as any);
