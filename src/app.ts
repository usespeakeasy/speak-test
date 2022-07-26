import express from 'express';
import timeout from 'connect-timeout';
import cors from 'cors';

const app = express();

let count = 0;

app.use(timeout('10s'));
app.use(cors());

function sleep() {
    return new Promise<void>((resolve) => {
        const duration = Math.floor(Math.random() * 6) + 1 * 100;
        setTimeout(() => resolve(), duration);
    });
}

app.get('/test', async (req, res) => {
    const startDate = Date.now();
    const c = ++count;
    console.log(`Request count: ${c}`);

    const test = Array.from({ length: 100000 }, () => Math.random() * Math.random() * Math.random());
    JSON.parse(JSON.stringify(test));
    await sleep();

    console.log(`Request ${c} done - ${Date.now() - startDate}ms`);
    res.send({ success: true });
});

app.get('/_startup', (req, res) => res.send({ success: true }));
app.get('/_health', (req, res) => res.send({ success: true }));

export default app;
