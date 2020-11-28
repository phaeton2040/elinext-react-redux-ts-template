import React from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../../store/features";
import { SearchForm } from "../../components/search-form/SearchForm";
import { OHLCTable } from "../../components/ohlc/OHLC";

//TODO: remove it. Styled component test
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const RedButton = styled(Button)`
    color: red;
`;
const GreenButton = styled(Button)`
    color: green
`

const App: React.FunctionComponent<{ count: number }> = ({ count }) => {
    const dispatch = useDispatch();
    console.log('API_URL:', process.env.ROBOGATE_API_URL)
    return (
        <div>
            <SearchForm />
            <OHLCTable />
        </div>
    );
}

const mapState = (state: { count: { value: number } }) => {
    return {
        count: selectCount(state)
    }
}

export default connect(mapState)(App);
