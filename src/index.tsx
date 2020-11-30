import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import { store } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <App />
                </Route>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
