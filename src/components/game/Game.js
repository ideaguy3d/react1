/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
import lodash from 'lodash';
import Stars from './Stars';
import GameBtn from './GameBtn';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';

function genRanNum() {
    return 1 + Math.floor(Math.random() * 9);
}

var possibleCombinationSum = function (arr, n) {
    if (arr.indexOf(n) >= 0) {
        return true;
    }
    if (arr[0] > n) {
        return false;
    }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount; i++) {
        var combinationSum = 0;
        for (var j = 0; j < listSize; j++) {
            if (i & (1 << j)) {
                combinationSum += arr[j];
            }
        }
        if (n === combinationSum) {
            return true;
        }
    }
    return false;
};
class Game extends React.Component {
    static initialState() {
        return {
            selectedNumbers: [],
            numberOfStars: genRanNum(),
            answerIsCorrect: null,
            usedNumbers: [],
            redraws: 5,
            doneStatus: '',
        };
    }

    constructor(props) {
        super(props);
        this.state = Game.initialState();
        this.selectNumber = this.selectNumber.bind(this);
        this.unselectNumber = this.unselectNumber.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.acceptAnswer = this.acceptAnswer.bind(this);
        this.redraw = this.redraw.bind(this);
        this.updateDoneStatus = this.updateDoneStatus.bind(this);
        this.possibleSolutions = this.possibleSolutions.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    resetGame() {
        console.log("in the resetGame");
        this.setState(Game.initialState());
    }

    selectNumber(clickedNumber) {
        if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
            console.log("the clicked number is in the usedNumbers array");
            return;
        }
        this.setState(function (prevState) {
            return {
                answerIsCorrect: null,
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            };
        });
    };

    acceptAnswer() {
        console.log("in accept answer");
        this.setState(prevState => {
            console.log("prevState.selectedNumbers", prevState.selectedNumbers);
            return {
                usedNumbers: prevState.usedNumbers
                    .concat(prevState.selectedNumbers),
                selectedNumbers: [],
                answerIsCorrect: null,
                numberOfStars: genRanNum()
            };
        }, this.updateDoneStatus);
    }

    redraw() {
        if (this.state.redraws === 0) return;
        this.setState(prevState => ({
            numberOfStars: genRanNum(),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus);
    }

    possibleSolutions({numberOfStars, usedNumbers}) {
        const possibleNumbers = lodash.range(1, 10)
            .filter(number => usedNumbers.indexOf(number) === -1);
        return possibleCombinationSum(possibleNumbers, numberOfStars);
    }

    updateDoneStatus() {
        console.log("this.state.usedNumbers = ", this.state.usedNumbers);
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {doneStatus: 'You Win!'}
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
                return {doneStatus: 'Game Over.'}
            }
        });
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
                <p>How many stars are there?</p>
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
                    <DoneFrame doneStatus={doneStatus}
                               resetGame={this.resetGame}/> :
                    <Numbers selectedNumbers={selectedNumbers}
                             selectNumber={this.selectNumber}
                             usedNumbers={usedNumbers}/>}

            </div>
        );
    }
}

Game.propTypes = {};

export default Game;