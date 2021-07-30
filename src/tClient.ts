import { TestClient } from './Type';

const client = new TestClient('0.0.0.0:6666');

const run = async () => {
    const res1 = await client.echoHello({req: 123});
    const res2 = await client.echoBye({req: 123});

    console.log(res1, res2);
};

run();
