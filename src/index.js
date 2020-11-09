import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.less';

// 导入store
import store from './store'

// 导入项目组件
import App from './App'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
