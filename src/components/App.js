/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>JavaScript Ninja</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;