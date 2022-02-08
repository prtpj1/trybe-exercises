// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}!`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

//Definição da função getUser
const getUser = (callback) => {
    setTimeout(() => {
        const user = {
            firstName: 'Ivan',
            lastName: 'Ivanovich',
            nationality: 'Russian'
        };
        // Retorne a 'callaback' passada como parametro na função 'getUser'
        console.log(callback(user));
    }, delay());
    // Retornamos nosso parametro, que será uma função (callback)
};

/* const getUser = (callback) => {
            const user = {
            firstName: 'Ivan',
            lastName: 'Ivanovich',
            nationality: 'Russian'
        };
        // Retorne a 'callaback' passada como parametro na função 'getUser'
        console.log(user);
        return callback(user);
    
    // Retornamos nosso parametro, que será uma função (callback)
}; */

getUser(userFullName);
getUser(userNationality);
