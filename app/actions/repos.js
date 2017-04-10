import * as types from './types'
import Api from '../lib/api'

export function fetchRepo(name) {
  return (dispatch, getState) => {
    const params = [
      `q=${encodeURIComponent(name)}`,  
    ].join('&')
    return Api.get(`search/repositories?${params}`).then(resp => {
      dispatch(setSearchedRepos({data: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setSearchedRepos({ data }) {
  return {
    type: types.SET_SEARCHED_REPO,
    data,
  }
}