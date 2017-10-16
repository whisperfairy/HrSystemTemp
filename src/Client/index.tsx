/**
 * Created by whisper on 2016/11/6.
 */
'use strict';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './container/App/app'
import { Provider } from 'react-redux';
import {store} from './store/store'
import './asset/styles/Normalize.scss'
import './asset/styles/style.scss'
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector('.app')
);