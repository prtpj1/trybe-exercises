// const fetch = require('node-fetch');

const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.data);
        return data.data;
    } catch (error) {
        return `${error}`;
    }
};

const fetchExchange = async () => {
    const url = 'https://freecurrencyapi.net/api/v2/latest?apikey=f1eb6aa0-868f-11ec-a0ea-d10ab2d1a826';

    const usdCurrencies = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => error.toString());
    // console.log(usdCurrencies);
    return usdCurrencies;
};

const getCoins = async () => {
    const coins = await fetchCoins();
    const usdCurrencies = await fetchExchange();

    const listCoins = document.getElementById('list-coins');

    coins.filter((coin, index) => index < 10)
        .forEach((coin) => {
            const newLi = document.createElement('li');
            const dollar = Number(coin.priceUsd);
            const real = dollar * usdCurrencies.BRL;
            console.log(real);

            const { name, symbol } = coin;

            newLi.innerText = `${name} (${symbol} = ${dollar
                .toLocaleString('pt-br', { style: 'currency', currency: 'USD' })}) / (${real.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })})`;

            listCoins.appendChild(newLi);
        });
};
// getCoins();

window.onload = () => getCoins();


