const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) => `${name} is ${value} ${measurementUnit} apart from the Sun!`;

const mars = {
    name: "Mars",
    distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
};

const venus = {
    name: "Venus",
    distanceFromSun: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};

const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    setTimeout(() => console.log('Returned planet: ', mars), 4000);
};

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemp = () => {
    const maxTemp = 58;
    return Math.floor(Math.random() * maxTemp);
};
const toFahrenheit = (marsTemp) => (marsTemp * 9 / 5) + 32;

const tempInFahrenheit = (marsTemp) =>
    console.log(`It is currently ${toFahrenheit(marsTemp)}°F at Mars`);
const greet = (marsTemp) =>
    console.log(`Hi there! Curiosity here. Right now is ${marsTemp}°C ar Mars!`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemp = (callback, onError) => {
    const marsTemp = getMarsTemp();
    // const msgSuccessful = (Math.random() <= 0.6);
    // setTimeout(() => console.log(`Mars temperature is: ${currentTemp} degree`), messageDelay());
    // setTimeout(() => callback(marsTemp), messageDelay());
    setTimeout(() => {
        (Math.random() <= 0.6) ?
            (callback(marsTemp)) :
            (onError('Robot is busy'));
    }, messageDelay());
};


// getMarsTemp();
sendMarsTemp(tempInFahrenheit, handleError);
sendMarsTemp(greet, handleError);
// sendMarsTemp();
// getPlanet();
// planetDistanceFromSun(mars);
// setTimeout(() => planetDistanceFromSun(venus), 3000);
// setTimeout(() => planetDistanceFromSun(jupiter), 2000);
