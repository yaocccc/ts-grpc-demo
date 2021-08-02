import { TestService } from './Type';

const sleep = (ms: number): Promise<any> => new Promise(resolve => setTimeout(resolve, ms));
const server = new TestService('0.0.0.0:6666', {
    echoHello: async (req) => {
        await sleep(1000);
        return { res: (req.req || 0) * 2 };
    },
    echoBye: async (req) => {
        return { res: (req.req || 0) / 2 };
    },
});
server.run();
