/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
import lodash from 'lodash';
const Numbers = function(props) {
    return(
        <div className="row">
            <div style={{textAlign: 'center', border: 'cornflowerblue solid 4px'}}>
                {Numbers.list.map((number, index) => {
                    return <span className="number" key={index}>{number}</span>;
                })}
            </div>
        </div>
    );
};

Numbers.list = lodash.range(1, 10);

export default Numbers;