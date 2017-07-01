/**
 * Created by Julius Alvarado on 6/30/2017.
 */

import React, {PropTypes} from 'react';

const Card = function (props) {
    return (
        <div style={{margin: '1.2em'}}>
            <img width="120" src={props.avatar_url} alt="avatar"/>
            <div style={{
                fontWeight: 'bold',
                display: 'inline-block',
                marginLeft: 10
            }}>
                <div className="info-darkgreen">
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

Card.propTypes = {
    avatar_url: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Card;