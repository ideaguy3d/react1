/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React, {PropTypes} from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    render() {
        return (
            <div>
                <button>+1</button>
            </div>
        );
    }
}

export default Button;