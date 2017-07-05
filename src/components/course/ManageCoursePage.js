/**
 * Created by Julius Alvarado on 7/2/2017.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    // this lifecycle hook function gets called anytime props have changed
    // or anytime react thinks props have changed.
    componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect() {
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm course={this.state.course} errors={this.state.errors}
                        allAuthors={this.props.authors}
                        onChange={this.updateCourseState}
                        onSave={this.saveCourse}
                        loading={this.state.saving}/>
        );
    }
}
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};
function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course.length) return course[0]; // .filter() returns an array
    return null;
}
function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // ".com/course/:id"
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormattedForDropdown = state.authors.map(function (author) {
        return {
            value: author.id,
            text: author.firstName + " " + author.lastName
        };
    });
    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 