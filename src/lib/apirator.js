export default {
  devmode : process.env.NODE_ENV == 'development',
  // devmode : false,
  apiUrl  : "/local/ajax/minimalistic/",

  async postRequest (url, body) {
    let opts = {
      method  : 'POST', 
      headers : { "Content-type": "application/json" },
      body    : JSON.stringify(body),
    }

    return await fetch(url, opts)
  },


  async getSlides () {
    if (this.devmode) {  return fetch('/mocks/slides.json')  }
    return await fetch(`${this.apiUrl}/get-slides.php`)
  },
}