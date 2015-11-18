import request from '../core/request'
import keyMirror from 'keymirror'

const actions = keyMirror({
  SEARCH_RESULT_LOAD: null,
  SEARCH_RESULT_LOAD_SUCCESS: null
})

const initialState = {
  loading: false,
  loaded: false,
  defaultText: 'Nothing Found Lah',
  query: ''
}

export default function search (state = initialState, action = {}) {
  switch (action.type) {
    case actions.SEARCH_RESULT_LOAD:
      return {
        ...state,
        loading: true,
        loaded: false,
        query: action.query,
        defaultText: 'Loading ...'
      }
    case actions.SEARCH_RESULT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        query: action.query,
        payload: action.payload,
        defaultText: 'Loaded :)'
      }

    default:
      return state
  }
}


export function getSearchResultFor(query) {
  return request('https://api.redmart.com/v1.5.6/catalog/search?pageSize=100&q='+query, [
    function () {
      return {
        type: actions.SEARCH_RESULT_LOAD,
        query: query
      }
    },

    function(json) {
      return {
        type: actions.SEARCH_RESULT_LOAD_SUCCESS,
        query: query,
        payload: json
      }
    }
  ])
}
