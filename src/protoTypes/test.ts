import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TestServiceClient as _test_TestServiceClient, TestServiceDefinition as _test_TestServiceDefinition } from './test/TestService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  test: {
    EchoByeRequest: MessageTypeDefinition
    EchoByeResponse: MessageTypeDefinition
    EchoHelloRequest: MessageTypeDefinition
    EchoHelloResponse: MessageTypeDefinition
    TestService: SubtypeConstructor<typeof grpc.Client, _test_TestServiceClient> & { service: _test_TestServiceDefinition }
  }
}

