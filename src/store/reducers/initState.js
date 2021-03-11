
// 初始化state
const initState = {
    inputValue: '',
    list: [],
}

// reducer可以接受state，但是绝不能修改state，返回的事新的state
export default (state = initState, action) => {
    return state;
}
