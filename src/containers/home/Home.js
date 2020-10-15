import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Home extends React.Component{

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
                    onClick={() => {this.pushRoute('/game')}}>
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
            </div>
        );
    }
}
 
export default Home;