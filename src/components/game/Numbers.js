/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React, {PropTypes} from 'react';
import lodash from 'lodash';

const Numbers = function(props) {
    const numberClassName = function(number){
        if(props.usedNumbers.indexOf(number) >= 0) {
            return 'number used';
        }
        if(props.selectedNumbers.indexOf(number) >= 0) {
            return 'number selected';
        } else return 'number';
    };
    return(
        <div className="row">
            <div style={{textAlign: 'center', border: 'cornflowerblue solid 4px'}}>
                {Numbers.list.map((number, index) => {
                    return <span className={numberClassName(number)} key={index}
                    onClick={()=>props.selectNumber(number)}>
                        {number}</span>;
                })}
            </div>
        </div>
    );
};

Numbers.list = lodash.range(1, 10);

export default Numbers;