const text = "Hello World"

const fruits = ''

test('This should be a text', () => {
	expect(text).toMatch(/World/);
});
