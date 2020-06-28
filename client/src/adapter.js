import React from "react";
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const Adapter = (props) => {
    const { children, store } = props;

    return (
        <ReduxProvider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ReduxProvider>
    )
}

export default Adapter;