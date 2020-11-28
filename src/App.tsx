import React from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./store/features";

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
    return (
        <div>
            <h1>COUNT VALUE: {count}</h1>
            <RedButton onClick={() => dispatch(increment())}>Plus</RedButton>
            <GreenButton onClick={() => dispatch(decrement())}>Minus</GreenButton>
        </div>
    );
}

const mapState = (state: { count: { value: number } }) => {
    return {
        count: selectCount(state)
    }
}

export default connect(mapState)(App);
