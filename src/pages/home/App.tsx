import React from 'react';
import { connect, useDispatch } from "react-redux";
import SearchForm, { SearchFormValues } from "./search-form/SearchForm";
import OHLCResult from "./ohlc/OHLCResult";
import { SearchFormState, fetchData, selectMinMax } from "../../store/features";
import { Loader } from "../../components/loader/Loader";

export interface AppProps {
    loading: boolean;
    result: {
        min: number,
        max: number
    } | null
}

const App: React.FunctionComponent<AppProps> = (props) => {
    const dispatch = useDispatch();
    const { loading, result } = props;
    const submitSearchForm = (values: SearchFormValues) => {
        dispatch(fetchData(values))
    };

    return (
        <div>
            { loading ? <Loader /> : null}
            <SearchForm onSubmit={submitSearchForm} />
            { result ? <OHLCResult min={result!.min} max={result!.max} /> : null}
        </div>
    );
}

const mapState = (state: { search: SearchFormState}) => {
    return {
        loading: state.search.loading,
        result: selectMinMax(state.search)
    }
};

export default connect(mapState)(App);
