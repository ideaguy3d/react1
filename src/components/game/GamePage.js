/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React from 'react';
import Result from './Result';
import Button from './Button';

class Game extends React.Component {
    // state = {counter: 0}
    constructor(props) {
        super(props);
        this.state = {counter: 42};
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // will act as a prototype function on this class
    incrementCounter() {
        this.setState(prevState => ({counter: prevState.counter+1}) );
    }

    render() {
        return (
            <div>
                <Result counter={this.state.counter} />
                <Button />
            </div>
        );
    }
}

export default Game;


