import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { TestServiceHandlers as _TestServiceHandlers, TestServiceClient } from './protoTypes/test/TestService';
import { ProtoGrpcType } from './protoTypes/test';
import { EchoHelloRequest } from './protoTypes/test/EchoHelloRequest';
import { EchoHelloResponse } from './protoTypes/test/EchoHelloResponse';
import { EchoByeRequest } from './protoTypes/test/EchoByeRequest';
import { EchoByeResponse } from './protoTypes/test/EchoByeResponse';

const packageDefinition = protoLoader.loadSync(__dirname + '/../protos/test.proto');
const testProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

interface TestServiceHandlers {
    echoHello: (req: EchoHelloRequest) => Promise<EchoHelloResponse>;
    echoBye: (req: EchoByeRequest) => Promise<EchoByeResponse>;
}

const genHandler = async <Q, S>(call: grpc.ServerUnaryCall<Q, S>,
                                callback: grpc.sendUnaryData<S>,
                                handler: (req: Q) => Promise<S>) => {
    callback(null, (await handler(call.request)))
};

class TestService {
    private readonly serverUrl: string;
    private server: grpc.Server;
    private handlers: TestServiceHandlers;

    constructor(serverUrl: string, handlers: TestServiceHandlers) {
        this.serverUrl = serverUrl;
        this.server = new grpc.Server();
        this.handlers = handlers;
    }

    public run = async (): Promise<void> => {
        this.server.addService(testProto.test.TestService.service, {
            echoHello: (call, callback) => genHandler(call, callback, this.handlers.echoHello),
            echoBye: (call, callback) => genHandler(call, callback, this.handlers.echoBye),
        } as _TestServiceHandlers);
        return new Promise((resolve) => {
            this.server.bindAsync(this.serverUrl, grpc.ServerCredentials.createInsecure(), () => {
                resolve(this.server.start());
            });
        });
    };
}

class TestClient {
    private client: TestServiceClient;

    constructor(serverUrl: string) {
        this.client = new testProto.test.TestService(serverUrl, grpc.credentials.createInsecure());
    }

    public echoHello = async (req: EchoHelloRequest): Promise<EchoHelloResponse> => {
        return new Promise((resolve) => {
            this.client.echoHello(req, (_, res) => {
                resolve(res as EchoHelloResponse);
            });
        });
    };

    public echoBye = async (req: EchoByeRequest): Promise<EchoByeResponse> => {
        return new Promise((resolve) => {
            this.client.echoBye(req, (_, res) => {
                resolve(res as EchoByeResponse);
            });
        });
    };
}

export {
    EchoHelloRequest,
    EchoHelloResponse,
    EchoByeRequest,
    EchoByeResponse,
    TestServiceHandlers,
    TestService,
    TestClient
};

// const sleep = (ms: number): Promise<any> => new Promise(resolve => setTimeout(resolve, ms));
// const server = new TestService('0.0.0.0:6666', {
//     echoHello: async (req) => {
//         await sleep(1000);
//         return { res: req.req * 2 };
//     },
//     echoBye: async (req) => {
//         return { res: req.req / 2 };
//     },
// });
// server.run();
