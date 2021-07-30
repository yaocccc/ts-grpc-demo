import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { TestServiceHandlers } from '../proto/test/TestService';
import { ProtoGrpcType as TestProtoGrpcType } from '../proto/test';

const testServerHandlers: TestServiceHandlers = {
    echoHello: (req, callback) => {
        console.log(req.request.req);
        callback(null, {res: req.request.req * 2})
    },
    echoBye: (req, callback) => {
        console.log(req.request.req);
        callback(null, {res: req.request.req / 2})
    },
};

const packageDefinition = protoLoader.loadSync('../proto/test.proto');
const testProto = grpc.loadPackageDefinition(packageDefinition) as unknown as TestProtoGrpcType;

const server = new grpc.Server();
server.addService(testProto.test.TestService.service, testServerHandlers);
server.bindAsync('0.0.0.0:6666', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('server on 6666');
});
