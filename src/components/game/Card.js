/**
 * Created by Julius Alvarado on 6/30/2017.
 */

import React from 'react';

const Card = function (props) {
    return (
        <div style={{margin: '1.2em'}}>
            <img width="120" src="https://avatars3.githubusercontent.com/u/14084686?v=3" alt="avatar"/>
            <div style={{
                fontWeight: 'bold',
                display: 'inline-block',
                marginLeft: 10
            }}>
                <h3 className="info-darkgreen">
                    Julius Alvarado
                </h3>
                <h4>Julius3D.com</h4>
            </div>
        </div>
    );
};

export default Card;