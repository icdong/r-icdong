/*
 * @Description: useContext方式传参，组件Navbar和Messages，它们之间共享状态
 * @Author: Daito Chai
 * @Date: 2021-03-12 14:57:18
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-16 21:59:24
 */

import React, { useContext, useState } from "react";
import { Button } from 'antd';

const TestContext = React.createContext({});

const Navbar = () => {
    const { count } = useContext(TestContext)

    return (
        <div className="navbar">
            <p>组件1——————{count}</p>
        </div>
    )
}

const Messages = () => {
    const { count } = useContext(TestContext)

    return (
        <div className="messages">
            <p>组件2——————{count}</p>
        </div>
    )
}

const Page1 = () => {
    const [count, setCount] = useState(0);

    return (
        <TestContext.Provider
            value={{
                count: count,
            }}
        >
            <div className="test">
                <p> 我是父组件</p>
                <p>点击了 {count} 次!</p>
                <Button type="primary" onClick={() => { setCount(count + 1); }}>点我</Button>
                <Navbar />
                <Messages />
            </div>
        </TestContext.Provider>
    );
}

export default Page1;