export default class fetchPoke{

    constructor () {
        var name;
        var type;
        var dexEntry;
    }
        
    url(num){
        const baseURL = "https://pokeapi.co/api/v2/pokemon/";
        var searchURL = baseURL.concat(num.toString());
        console.log(searchURL)
        return searchURL
    };
    
    async pull(url){
        var response = await fetch(url);
        var data = await response.json();

        return data;
    }
    
}