/**
 *
 */
export default class fetchPoke {
  /**
   *
   */
  constructor() {
  }

  /**
   * @param {number} num
   * @return {string}
   */
  url(num) {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
    var searchURL = baseURL.concat(num.toString());
    console.log(searchURL);
    return searchURL;
  }

  /**
   * @param {string} url
   * @return {Object}
   */
  async pull(url) {
    var response = await fetch(url);
    var data = await response.json();

    return data;
  }
}
