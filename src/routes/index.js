/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-03-12 14:57:18
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-22 13:55:50
 */
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../pages/home/Home';
import Game from '../pages/page/Game';
import Page1 from '../pages/page/Page1';
import Page2 from '../pages/page/Page2';
import Page3 from '../pages/page/Page3';
 
class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
            </Router>
        )
    }
}
export default Routes;