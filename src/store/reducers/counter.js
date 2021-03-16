/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-03-15 14:12:53
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-15 15:21:00
 */
// 初始化state
let initState = {
    count: 0
}

// 基于原有state根据action得到新的state
const counter = (state = initState, action) => {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// 根据reducer函数通过createStore()创建store
export default counter;
