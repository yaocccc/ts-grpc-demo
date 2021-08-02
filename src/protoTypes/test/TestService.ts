// Original file: protos/test.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EchoByeRequest as _test_EchoByeRequest, EchoByeRequest__Output as _test_EchoByeRequest__Output } from '../test/EchoByeRequest';
import type { EchoByeResponse as _test_EchoByeResponse, EchoByeResponse__Output as _test_EchoByeResponse__Output } from '../test/EchoByeResponse';
import type { EchoHelloRequest as _test_EchoHelloRequest, EchoHelloRequest__Output as _test_EchoHelloRequest__Output } from '../test/EchoHelloRequest';
import type { EchoHelloResponse as _test_EchoHelloResponse, EchoHelloResponse__Output as _test_EchoHelloResponse__Output } from '../test/EchoHelloResponse';

export interface TestServiceClient extends grpc.Client {
  echoBye(argument: _test_EchoByeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  echoBye(argument: _test_EchoByeRequest, callback: (error?: grpc.ServiceError, result?: _test_EchoByeResponse__Output) => void): grpc.ClientUnaryCall;
  
  echoHello(argument: _test_EchoHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  echoHello(argument: _test_EchoHelloRequest, callback: (error?: grpc.ServiceError, result?: _test_EchoHelloResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface TestServiceHandlers extends grpc.UntypedServiceImplementation {
  echoBye: grpc.handleUnaryCall<_test_EchoByeRequest__Output, _test_EchoByeResponse>;
  
  echoHello: grpc.handleUnaryCall<_test_EchoHelloRequest__Output, _test_EchoHelloResponse>;
  
}

export interface TestServiceDefinition extends grpc.ServiceDefinition {
  echoBye: MethodDefinition<_test_EchoByeRequest, _test_EchoByeResponse, _test_EchoByeRequest__Output, _test_EchoByeResponse__Output>
  echoHello: MethodDefinition<_test_EchoHelloRequest, _test_EchoHelloResponse, _test_EchoHelloRequest__Output, _test_EchoHelloResponse__Output>
}
