/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
const GameBtn = function (props) {
    let button;
    switch (props.answerIsCorrect) {
        case true: // we clicked the btn and the answer was correct
            button =
                <button className="btn btn-success btn-sm"
                        onClick={props.acceptAnswer}>
                    <span className="glyphicon glyphicon-check">submit</span>
                </button>;
            break;
        case false:
            button =
                <button className="btn btn-danger btn-sm">
                    <span className="glyphicon glyphicon-ban-circle"></span>
                </button>;
            break;
        default:
            button = <button onClick={props.checkAnswer}
                             disabled={props.selectedNumbers.length === 0}
                             className="btn btn-default btn-lg">=</button>;
            break;
    }
    return (
        <div className="col-sm-2 col-md-2 col-lg-2 text-center">
            {button}
            <br/><br/>
            <button className="btn btn-warning btn-sm" onClick={props.redraw}
                    disabled={props.redraws === 0}>
                <span className="glyphicon glyphicon-refresh">
                    &nbsp;{props.redraws}
                </span>
            </button>
        </div>
    );
};
GameBtn.propTypes = {};
export default GameBtn;