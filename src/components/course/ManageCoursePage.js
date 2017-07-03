/**
 * Created by Julius Alvarado on 7/2/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        };
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    render() {
        return (
            <CourseForm course={this.state.course} errors={this.state.errors}
                        allAuthors={this.props.authors}
                        onChange={this.updateCourseState}/>
        );
    }
}
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    const authorsFormatted = state.authors.map(function (author) {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormatted
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 