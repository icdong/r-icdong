/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-03-15 14:12:53
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-16 09:45:40
 */

const increaseAction = { type: 'increase' }

//  将state映射到Counter组件的props
export const mapStateToProps = state => {
    return {
        value: state.counter.count
    }
}

//  将action映射到Counter组件的props
export const mapDispatchToProps = dispatch => {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}