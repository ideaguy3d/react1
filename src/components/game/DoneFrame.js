/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
const DoneFrame = function(props) {
    return(
        <div className="text-center">
            <h1>{props.doneStatus}</h1>
        </div>
    );
};
DoneFrame.propTypes = {
    
};
export default DoneFrame;