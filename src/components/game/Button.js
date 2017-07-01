/**
 * Created by Julius Alvarado on 6/29/2017.
 */

import React, {PropTypes} from 'react';

class Button extends React.Component {

    render() {
        return (
            <div style={{display: "inline", marginLeft: 8+"px"}}>
                <button className="btn btn-default btn-sm"
                        onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
                    +{this.props.incrementValue}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    incrementValue: PropTypes.number.isRequired
};

export default Button;