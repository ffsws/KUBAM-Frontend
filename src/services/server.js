import {KUBAM_API} from './api'
const url = KUBAM_API

const serverApi = {
  list(userData) {
    return fetch(url + '/servers', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(statusHelper)
    .then(data => {
      return data
    })
    .catch( (error) => { 
      return error
    })
  },
  updateServers(userData) {
    return fetch(url + '/servers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        servers: userData.servers,
        hosts: userData.hosts,
      }),
    })
    .then(statusHelper)
    .then(data => {
      return data
    })
    .catch( (error) => {
      return error
    })
  },
  getCatalog() {
    return fetch(url + '/catalog', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(statusHelper)
    .then(data => {
      return data
    })
    .catch( (error) => { 
      return error
    })
  },
}

// thanks: https://github.com/redux-saga/redux-saga/issues/561
function statusHelper (response) {
  let json = response.json(); // there's always a body.
  if (response.status >= 200 && response.status < 300) {
    return json.then(Promise.resolve(response))
  } else {
    if (! json.error) {
      json.error = "Unable to get server settings."
    }
    return json.then(Promise.reject.bind(Promise))
  }
}

export default serverApi
