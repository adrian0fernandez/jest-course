// first test

const text = "Hello World"

test('This should be a text', () => {
	expect(text).toMatch(/World/);
});


// boolean

const fruits = ['apple', 'melon', 'banana']

test('We got a banana?', () => {
	expect(fruits).toContain('banana');
});

test('Mayor que ', () => {
	expect(10).toBeGreaterThan(9);
});

test('Its true', () => {
	expect(true).toBeTruthy();
});


// creating callback

const reverseString = (str, cb) => {
	cb(str.split("").reverse().join(""))
};

test('testing a callback', () => {
	reverseString('Hello', (str) => {
		expect(str).toBe('olleH');
	});
});


// implementing promises

const reverseString2 = str => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error(''))
		}
		resolve(str.split("").reverse().join(""))
	});
};

test('Proof a promise', () => {
	return reverseString2('Hello')
		.then(string => {
			expect(string).toBe('olleH');
		});
});



// Implementing 'async' and 'await'

test('Proof async/await', async () => {
	const string = await reverseString2('Hello');
	expect(string).toBe('olleH');
});

// // how to execute tests after testing process
// afterEach(() => console.log('After each test'));
// afterAll(() => console.log('After all tests'));

// // how to execute tests before testing process
// beforeEach(() => console.log('Before each test'));
// beforeAll(() => console.log('Before all tests'));
