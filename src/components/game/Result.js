/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React, {PropTypes} from 'react';

const Result = function(props){
    return (
        <div>
            <p>Result: {props.counter}</p>
        </div>
    );
};

Result.propTypes = {
    counter: PropTypes.number.isRequired
};

export default Result;