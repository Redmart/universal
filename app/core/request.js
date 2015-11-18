import fetch from 'isomorphic-fetch'

export default function request(url, actions, callback) {
  return function (dispatch) {
    if (actions) {
      dispatch(actions[0])
    }

    return fetch(url)
      .then(function(res) {
        return res.json()
      }).then(function(json) {
        if (actions) {
          dispatch(actions[1](json))
        }
        if (callback) {
          callback(json)
        }
      })
  }
}
