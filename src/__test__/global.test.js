const text = "Hello World"

const fruits = ['apple', 'melon', 'banana']

test('This should be a text', () => {
	expect(text).toMatch(/World/);
});

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
