import React from 'react';
import { connect, useDispatch } from "react-redux";
import SearchForm, { SearchFormValues } from "../../components/search-form/SearchForm";
import OHLCTable from "../../components/ohlc/OHLC";

const App: React.FunctionComponent<any> = () => {
    const dispatch = useDispatch();
    const submitSearchForm = (values: {}) => {
        values = values as SearchFormValues;
        console.log(values, this);
    }
    return (
        <div>
            <SearchForm onSubmit={submitSearchForm} />
            <OHLCTable />
        </div>
    );
}

export default connect()(App);
