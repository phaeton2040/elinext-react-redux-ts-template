import React from 'react';
import { connect, useDispatch } from "react-redux";
import SearchForm, { SearchFormValues } from "./search-form/SearchForm";
import OHLCResult from "./ohlc/OHLCResult";
import { SearchFormState, fetchData, selectMinMax } from "../../store/features";
import { Loader } from "../../components/loader/Loader";
import { ErrorMessage } from "../../components/error-message/ErrorMessage";

export interface AppProps {
    loading: boolean;
    result: {
        min: number,
        max: number
    } | null,
    error?: string;
}

const App: React.FunctionComponent<AppProps> = (props) => {
    const dispatch = useDispatch();
    const { loading, result, error } = props;
    const submitSearchForm = (values: SearchFormValues) => {
        dispatch(fetchData(values))
    };

    return (
        <div>
            <SearchForm onSubmit={submitSearchForm} />
            { result ? <OHLCResult min={result!.min} max={result!.max}/> : null}
            { error ? <ErrorMessage message={error as string} /> : null}
            { loading ? <Loader /> : null}
        </div>
    );
}

const mapState = (state: { search: SearchFormState}) => {
    return {
        loading: state.search.loading,
        result: selectMinMax(state.search),
        error: state.search.error
    }
};

export default connect(mapState)(App);
