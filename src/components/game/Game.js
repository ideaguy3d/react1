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
            selectedNumbers: [2,4]
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Add 9</h1>
                <div className="row">
                    <Stars/>
                    <GameBtn/>
                    <Answer selectedNumbers={this.state.selectedNumbers}/>
                </div><br/>

                <Numbers />
            </div>
        );
    }
}

Game.propTypes = {};

export default Game;