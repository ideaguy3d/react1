/**
 * Created by Julius Alvarado on 6/30/2017.
 */

import React from 'react';
import Card from './Card';

const CardList = function(props){
    return(
        <div>
            <p>List of Data</p>
            <Card name="Julius Alvarado"
            avatar_url="https://avatars3.githubusercontent.com/u/14084686?v=3"
            company="julius3d.com"/>
        </div>
    );
};
export default CardList;

