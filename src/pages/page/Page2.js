/*
 * @Description: hooks模式使用redux
 * @Author: Daito Chai
 * @Date: 2021-03-12 14:57:18
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-16 16:35:13
 */
import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";

const Page2 = () => {
    const value = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>hooks模式使用redux</p>
            <span>{value}</span>
            <Button type="primary" onClick={() => dispatch({ type: 'increase' })}> +1</Button>
        </div>
    )
}
 
export default Page2;