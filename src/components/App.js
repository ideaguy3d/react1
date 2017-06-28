/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <p className="text-center page-header">JavaScript Ninja</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;