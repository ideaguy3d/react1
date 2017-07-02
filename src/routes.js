/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import GamePage from './components/game/GamePage';
import ManageCoursePage from './components/course/ManageCoursePage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
        <Route path="game" component={GamePage}/>
    </Route>
);