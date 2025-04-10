import { NestFactory } from '@nestjs/core';
import { CommitServerModule } from './commit-server.module';

async function bootstrap() {
  const app = await NestFactory.create(CommitServerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
