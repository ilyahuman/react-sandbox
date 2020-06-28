import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from './adapter';
import App from './components/App/App';
import { store } from './store'

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.StrictMode>
        <Adapter store={store}>
            <App />
        </Adapter>
    </React.StrictMode>,
    document.getElementById('root')
);

