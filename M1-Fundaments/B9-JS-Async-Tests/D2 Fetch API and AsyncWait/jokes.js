// apiScript.js
const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
        // .then(response => console.log(response));
};
console.log(fetchJoke());
window.onload = () => fetchJoke();