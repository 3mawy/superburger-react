import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import {positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/configureStore";

import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";
import {persistStore,} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

i18next.init({
    interpolation: {escapeValue: false},
    lng: 'ar',
    resources: {
        en: {
            common: common_en
        },
        ar: {
            common: common_ar
        },
    },
});

let persistor = persistStore(store)

const options = {
    timeout: 2000,
    position: positions.TOP_CENTER,
    offset: '1rem',
    containerStyle: {
        zIndex: 9999999999999999
    }
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <PersistGate loading={null} persistor={persistor}>
                    <AlertProvider template={AlertTemplate} {...options}>
                        <App/>
                    </AlertProvider>
                </PersistGate>
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
