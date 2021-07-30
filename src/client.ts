import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType as TestProtoGrpcType } from '../proto/test';

const packageDefinition = protoLoader.loadSync('../proto/test.proto');
const testProto = grpc.loadPackageDefinition(packageDefinition) as unknown as TestProtoGrpcType;

const client = new testProto.test.TestService('0.0.0.0:6666', grpc.credentials.createInsecure());

const test = async () => {
    client.echoHello({ req: 1 }, (err, res) => {
        console.log(`[logger-res1]: `, res);
        console.log(`[logger-err1]: `, err);
    });
    client.echoBye({ req: 2 }, (err, res) => {
        console.log(`[logger-res2]: `, res);
        console.log(`[logger-err2]: `, err);
    });
};

test();
