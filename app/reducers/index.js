import { combineReducers } from 'redux';
import * as repoReducers from './repos';

export default combineReducers(Object.assign(
    repoReducers,
));