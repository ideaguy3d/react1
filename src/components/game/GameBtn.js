/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
const GameBtn = function(props){
    return (
        <div className="col-sm-2 col-md-2 col-lg-2">
            <button disabled={props.selectedNumbers.length === 0}
                className="btn btn-danger btn-lg">=</button>
        </div>
    );
};
GameBtn.propTypes = {

};
export default GameBtn;