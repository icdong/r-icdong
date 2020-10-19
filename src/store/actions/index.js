
const increaseAction = { type: 'increase' }


//  将state映射到Counter组件的props
export const mapStateToProps = state => {
    return {
        value: state.count
    }
}

//  将action映射到Counter组件的props
export const  mapDispatchToProps = dispatch => {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}