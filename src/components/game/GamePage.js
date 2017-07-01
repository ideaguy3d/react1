/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React from 'react';
import Result from './Result';
import Button from './Button';
import CardList from './CardList';

class Game extends React.Component {
    // state = {counter: 0}
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // will act as a prototype function on this class
    incrementCounter(incrementCounter) {
        this.setState(prevState => ({counter: prevState.counter+incrementCounter}) );
    }

    render() {
        return (
            <div>
                <Result counter={this.state.counter} />
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <hr/>
                <CardList/>
            </div>
        );
    }
}

export default Game;


