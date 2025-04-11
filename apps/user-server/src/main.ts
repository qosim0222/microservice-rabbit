import { NestFactory } from '@nestjs/core';
import { UserServerModule } from './user-server.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UserServerModule,{
    transport:Transport.RMQ,
    options:{
      urls: ['amqp://localhost:5672'],
      queue: 'user_queue',
    }
  });
  await app.listen();
}
bootstrap();
