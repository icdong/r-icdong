/*
 * @Description: 项目入口
 * @Author: Daito Chai
 * @Date: 2020-12-16 20:57:17
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-15 14:37:16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.less';
import reportWebVitals from './reportWebVitals';

// 导入store
import store from './store/store'

// 导入项目组件
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

