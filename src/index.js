/* eslint-disable no-console */

import 'babel-polyfill'; // VERY-IMPORTANT for object.assign(), spread operator
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; // css files for webpack to import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);
