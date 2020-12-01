import React, { useCallback } from 'react';
import { connect, useDispatch } from "react-redux";
import SearchForm, { SearchFormValues } from "./search-form/SearchForm";
import OHLCResult from "./ohlc/OHLCResult";
import { fetchData, selectMinMax, OHLCState } from "../../store/features";
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
    const { loading, result, error } = props;
    const dispatch = useDispatch();
    const submitSearchForm = useCallback((values: SearchFormValues) => {
        dispatch(fetchData(values));
    }, [dispatch]);

    return (
        <div>
            <SearchForm onSubmit={submitSearchForm} />
            { result ? <OHLCResult min={result!.min} max={result!.max}/> : null}
            { error ? <ErrorMessage message={error as string} /> : null}
            { loading ? <Loader /> : null}
        </div>
    );
}

const mapState = (state: { ohlc: OHLCState}) => {
    return {
        loading: state.ohlc.loading,
        result: selectMinMax(state.ohlc),
        error: state.ohlc.error
    }
};

export default connect(mapState)(App);
