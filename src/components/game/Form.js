/**
 * Created by Julius Alvarado on 6/30/2017.
 */

import React, {PropTypes} from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then((function (res) {
                this.props.onSubmit(res.data);
                this.setState({userName: ''});
            }).bind(this));
        console.log("form submission input value caught by react = ",
            this.state.userName);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.userName}
                       onChange={event => this.setState({userName: event.target.value})}
                       type="text" placeholder="Github Username" required/>
                <button type="submit">Add Card</button>
            </form>
        );
    }
}

Form.propTypes = {};
export default Form;