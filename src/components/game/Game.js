/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
import Stars from './Stars';
import GameBtn from './GameBtn';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';

function genRanNum() {
    return 1 + Math.floor(Math.random() * 9);
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNumbers: [],
            numberOfStars: genRanNum(),
            answerIsCorrect: null,
            usedNumbers: [],
            redraws: 5,
            doneStatus: '',
        };
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
    }

    selectNumber(clickedNumber) {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;
        this.setState(function (prevState) {
            return {
                answerIsCorrect: null,
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            };
        });
    };

    acceptAnswer() {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers
                .concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: genRanNum()
        }));
    }

    redraw() {
        if (this.state.redraws === 0) return;
        this.setState(prevState => ({
            numberOfStars: genRanNum(),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1
        }));
    }

    unselectNumber(num) {
        this.setState(function (prevState) {
            return {
                selectedNumbers: prevState.selectedNumbers
                    .filter(number => number !== num),
                answerIsCorrect: null
            };
        });
    }

    checkAnswer() {
        console.log("in checkAnswer arrow function...");
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars ===
            prevState.selectedNumbers.reduce((acc, num) => acc + num, 0)
        }));
    };

    render() {
        // this.state.selectedNumbers, this.state.numberOfStars, this.state.answerIsCorrect
        const {
            selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers,
            redraws, doneStatus
        } = this.state;
        return (
            <div className="container">
                <h1>Add 9</h1>
                <p>
                    <small>how many stars are there?</small>
                </p>
                <div className="row">
                    <Stars numberOfStars={numberOfStars}/>
                    <GameBtn answerIsCorrect={answerIsCorrect}
                             acceptAnswer={this.acceptAnswer}
                             selectedNumbers={selectedNumbers}
                             checkAnswer={this.checkAnswer}
                             redraw={this.redraw}
                             redraws={redraws}/>
                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber}/>
                </div>
                <br/>
                {doneStatus ?
                    <DoneFrame doneStatus={doneStatus}/> :
                    <Numbers selectedNumbers={selectedNumbers}
                             selectNumber={this.selectNumber}
                             usedNumbers={usedNumbers}/>}

            </div>
        );
    }
}

Game.propTypes = {};

export default Game;