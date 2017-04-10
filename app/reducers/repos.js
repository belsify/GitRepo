import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRepos = createReducer({},{
    [types.SET_SEARCHED_REPO](state,action){
        let newState = [];
        action.data.items.forEach( (repo) => {
            newState[repo.id] = repo
        });
        return newState;
    }
});