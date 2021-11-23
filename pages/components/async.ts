async function getRemoteData() {
    //GET data
    const response = await fetch('http://example.com/movies.json');
    const responseJson = await response.json; //[0, 4, 3]

    //.map(counter => counter + 1)
    return responseJson.map(counter => counter + 1);
}

//return fetch(machin)
//  .then((response) => response.json())
//  .then((responseJson) => responseJson.map(counter => cunter + 1))