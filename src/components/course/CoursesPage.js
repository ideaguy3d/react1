/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {title: ""}
        }
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        alert(`saving ${this.state.course.title}`)
    }

    render() {
        return (
            <div>
                <h1>Skills</h1>
                <input type="text"
                       onChange={this.onTitleChange}
                       value={this.state.course.title}/>

                <input type="submit"
                       value="Save"
                       onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default CoursesPage;