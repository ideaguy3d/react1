/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <CourseList courses={courses}/>
            </div>
        );
    }
} // END OF: class CoursesPage {}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function matchDispatchToProps(dispatch) {
    return {
        // old way: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(CoursesPage);