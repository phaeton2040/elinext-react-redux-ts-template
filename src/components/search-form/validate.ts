import { SearchFormValues } from "./SearchForm";

export const validate = (values: SearchFormValues) => {
    const errors = {} as { from: string, to: string };
    const valuesCopy = Object.assign({}, values);
    if (!values.from) {
        errors.from = 'Year "from" must be present'
    }

    if (!values.to) {
        errors.to = 'Year "to" must be present'
    }

    valuesCopy.from = parseInt(values.from as string);
    valuesCopy.to = parseInt(values.to as string);

    if (isNaN(valuesCopy.from)) {
        errors.from = 'Year "from" must be a number';
    }

    if (isNaN(valuesCopy.to)) {
        errors.to = 'Year "to" must be a number';
    }

    if (valuesCopy.from < 2010) {
        errors.from = 'Year "from" must be later or equal to 2010';
    }

    if (valuesCopy.to < 2010) {
        errors.to = 'Year "to" must be later or equal to 2010';
    }

    if (valuesCopy.to < valuesCopy.from) {
        errors.to = 'Year "to" must be higher or equal to year "from"';
    }

    if (valuesCopy.to > new Date().getFullYear()) {
        errors.to = `Year "to" must be less than ${new Date().getFullYear()}`;
    }

    return errors;
}
