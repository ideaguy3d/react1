/**
 * Created by Julius Alvarado on 6/29/2017.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blanke">Watch</a></td>
            <td><Link to={'/course/'+course.id}/>{course.title}</td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;