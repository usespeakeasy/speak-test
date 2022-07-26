// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios');

const URL = 'http://23.251.147.14/test';
const CONCURRENT_REQUESTS = 500;

const options = { method: 'GET', url: URL };
let counter = 0;

const main = async () => {
    while (counter < 100) {
        counter++;
        await Promise.all(Array.from({ length: CONCURRENT_REQUESTS }, () => axios(options)));
        console.log(`Loop ${counter} done`);
    }
};

main();
