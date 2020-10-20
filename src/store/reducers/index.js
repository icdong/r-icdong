// 导入项目reducers

// 基于原有state根据action得到新的state
const counter = (state = { count: 0 }, action) => {
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
