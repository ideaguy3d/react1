/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React from 'react';
import Result from './Result';
import Button from './Button';
import CardList from './CardList';
import Form from './Form';

class Game extends React.Component {
    // state = {counter: 0}
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            cards: [
                {
                    name: 'foo', company: 'Google',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/14084686?v=3'
                },
                {
                    name: 'bar', company: 'Facebook',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/14084686?v=3'
                }
            ]
        };
        this.addNewCard = this.addNewCard.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // will act as a prototype function on this class
    incrementCounter(incrementCounter) {
        this.setState(prevState => ({counter: prevState.counter + incrementCounter}));
    }

    addNewCard(cardInfo) {
        this.setState(prevState =>({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render() {
        return (
            <div>
                <Result counter={this.state.counter}/>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
                <hr/>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

export default Game;


