/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2020-12-16 20:57:17
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-12 01:34:57
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/actions'

class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        // const value = this.props.value
        return (
            <div>
                <span>{value}</span>
                <Button onClick={onIncreaseClick}> +1</Button>
            </div>
        )
    }
}

const CounterConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.pushRoute = this.pushRoute.bind(this)
    }

    pushRoute(url) {
        this.props.history.push(url)
    }

    render() {
        return (
            <div>
                <div>This is Home!</div>
                <Button type="primary"
                    onClick={() => { this.pushRoute('/game') }}>
                    Button
                </Button>

                <Link to="/game/" >
                    <div>Game</div>
                </Link>
                <Link to="/page1/" >
                    <div>Page1</div>
                </Link>
                <Link to="/page2/" >
                    <div>Page2</div>
                </Link>
                <CounterConnect />
            </div>
        );
    }
}

export default Home