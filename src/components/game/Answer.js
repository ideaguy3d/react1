/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';

const Answer = function(props){
    return (
        <div className="col-sm-5 col-md-5 col-lg-5">
            {props.selectedNumbers.map(function(num, idx){
                return <span className="number" key={idx}
                             onClick={() => props.unselectNumber(num)}>{num}</span>;
            })}
        </div>
    );
};

Answer.propTypes = {
    selectedNumbers: PropTypes.array.isRequired
};
export default Answer;