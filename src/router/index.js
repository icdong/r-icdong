import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../containers/home/Home';
import Game from '../containers/page/Game';
import Page1 from '../containers/page/Page1';
import Page2 from '../containers/page/Page2';
 
class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Router>
        )
    }
}
export default Routes;