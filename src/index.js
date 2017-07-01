/* eslint-disable no-console */

import 'babel-polyfill'; // VERY-IMPORTANT for object.assign(), spread operator
import React from 'react';
import {render} from 'react-dom';
import configStore from './store/configStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
// css files for webpack to import
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
