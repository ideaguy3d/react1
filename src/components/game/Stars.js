/**
 * Created by Julius Alvarado on 7/1/2017.
 */

import React from 'react';
import lodash from 'lodash';

const Stars = function (props) {
    return (
        <div className="col-sm-5 col-md-5 col-lg-5">
            {lodash.range(props.numberOfStars).map(num =>
                <span key={num} className="glyphicon glyphicon-star"></span>)}
        </div>
    );
};
export default Stars;