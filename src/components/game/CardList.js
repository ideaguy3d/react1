/**
 * Created by Julius Alvarado on 6/30/2017.
 */

import React, {PropTypes} from 'react';
import Card from './Card';

const CardList = function (props) {
    return (
        <div style={{border: "solid 1px", marginTop: 12}}>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired
};

export default CardList;

