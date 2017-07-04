/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Skills</Link>
            {" | "}
            <Link to="/game" activeClassName="active">Game</Link>
            <LoadingDots interval={100} dots={20}/>
        </nav>
    );
};

export default Header;