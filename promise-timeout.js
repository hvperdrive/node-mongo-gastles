console.log('Start Script!');

const myPromise = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve("Hello world");
		}, 1000);
	});
};

myPromise()
	.then((response) => {
		console.log(response);
	});

console.log('Stop Script!');