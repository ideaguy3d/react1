/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React from 'react';
import {Link} from 'react-router'; // link component from react-router

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Skill Admin</h1>
                <p>manage all the skills you've acquired from studying</p>
                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        );
    }
}

export default HomePage;

