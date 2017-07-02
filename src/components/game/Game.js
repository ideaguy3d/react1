/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
import Stars from './Stars';
import GameBtn from './GameBtn';
import Answer from './Answer';
import Numbers from './Numbers';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            numberOfStars: 1 + Math.floor(Math.random() * 9)
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
    }

    selectNumber(clickedNumber) {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;

        this.setState(function (prevState) {
            return {
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            };
        });
    };

    unselectNumber(num) {
        this.setState(function(prevState){
            return {
                selectedNumbers: prevState.selectedNumbers
                    .filter(number => number !== num)
            };
        });
    }

    render() {
        // this.state.selectedNumbers, this.state.numberOfStars
        const {selectedNumbers, numberOfStars} = this.state;
        return (
            <div className="container">
                <h1>Add 9</h1>
                <div className="row">
                    <Stars numberOfStars={numberOfStars}/>
                    <GameBtn selectedNumbers={selectedNumbers}/>
                    <Answer selectedNumbers={selectedNumbers}
                    unselectNumber={this.unselectNumber}/>
                </div>
                <br/>

                <Numbers selectedNumbers={selectedNumbers}
                selectNumber={this.selectNumber}/>
            </div>
        );
    }
}

Game.propTypes = {};

export default Game;