/*
 * @Description: 合并项目reducers，reducer必须是纯函数
 * @Author: Daito Chai
 * @Date: 2021-03-15 14:20:39
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-16 09:45:51
 */
import { combineReducers } from 'redux'

import counter from './counter'

export default combineReducers({
    counter
})

