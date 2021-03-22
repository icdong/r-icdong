/*
 * @Description: React生命周期(旧版)
 * @Author: Daito Chai
 * @Date: 2021-03-19 23:47:41
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-22 16:06:36
 */

import React, { Component } from 'react'

export default class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aaaa: 111111
        }
        // getDefaultProps：接收初始props
        // getInitialState：初始化state
    }
    state = {

    }

    // 组件每次被rerender的时候，包括在组件构建之后(虚拟dom之后，实际dom挂载之前)
    // 每次获取新的props或state之后; 每次接收新的props之后都会返回一个对象作为新的state
    // 返回null则说明不需要更新state
    static getDerivedStateFromProps(props, state) {
        return state
    }
    
    componentDidMount() { // 挂载后
        console.log('挂载后')
        setTimeout(() => {
            this.setState({
                aaaa: 22222
            })
        }, 3000)
    }

    // 组件Props或者state改变时触发，true：更新，false：不更新
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) { // 组件更新前触发
        console.log('组件更新前触发')
        console.log(3+" getSnapshotBeforeUpdate ",prevState)
        console.log(prevProps,prevState)
        // 该函数的返回值将作为参数传递给下个生命周期函数，必须有返回值 prevState
        return prevState
    }

    componentDidUpdate() { // 组件更新后触发
        console.log('组件更新后触发')
    }

    componentWillUnmount() { // 组件卸载时触发
        console.log('组件卸载时触发')
    }

    render() {
        let aaaa = this.state.aaaa
        return (
            <div>
                <h2>React生命周期(新版)</h2>
                <p>{aaaa}</p>
            </div>
        )
    }

    componentDidCatch(error, info) { // 获取到javascript错误
        console.log('获取到javascript错误')
    }
}