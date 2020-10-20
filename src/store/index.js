
import {createStore} from 'redux';
import counter from './reducers';

// store是唯一的
// 只有store才能改变自己的内容（state）
// reducer必须是纯函数
// 把 reducer 放进 createStore 里 创建store
// 根据reducer函数通过createStore()创建store
let store = createStore(counter)

export default store;
