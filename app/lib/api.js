class Api {
  static headers() {
    return {
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      // 'User-Agent': 'GitRepo API'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'https://api.github.com/'
    const url = `${host}${route}`
    console.log(url);
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});
    }).then( json => json );
  }
}
export default Api