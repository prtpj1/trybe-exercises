const countryName = ({ name }) => console.log(`Returned country is ${name}!`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is ${currency}!`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
    setTimeout(() => {
        const didOperationSuccess = Math.random() >= 0.5;
        if(didOperationSuccess) {
            const country = {
                name: 'Brazil',
                hdi: 0.759,
                currency: 'Real'
            };
            onSuccess(country);
        };
        if (!didOperationSuccess) {
            const errorMessage = 'Country could not be found!';
        };
    }, delay());
};

getCountry(countryName, printErrorMessage);

getCountry(countryCurrency, printErrorMessage);