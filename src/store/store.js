/*
 * @Description: store是唯一的、只有store才能改变自己的内容（state）,创建store就是整合所有reducer
 * @Author: Daito Chai
 * @Date: 2021-03-15 14:12:53
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-15 14:53:59
 */

import { createStore } from 'redux';
import reducers from './reducers/reducers';

// 根据reducer函数通过createStore()创建store
let store = createStore(reducers)

export default store;
