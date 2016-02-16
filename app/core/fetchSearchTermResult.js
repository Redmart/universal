import fetch from 'isomorphic-fetch'

export default function getSearchResult (query, callback) {
  return fetch('https://api.redmart.com/v1.5.6/catalog/search?q='+query)
      .then(function(res) {
        return res.json()
      }).then(function(json) {
        callback(json)
      })
}
