// random
const cities = ['Ciudad de México', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
    const strings = cities[Math.floor(Math.random() * cities.length)];
    return strings;
};

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error(''))
		}
		resolve(str.split("").reverse().join(""))
	});
};