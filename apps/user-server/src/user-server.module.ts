import { Module } from '@nestjs/common';
import { UserServerController } from './user-server.controller';
import { UserServerService } from './user-server.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [UserServerController],
  providers: [UserServerService],
})
export class UserServerModule {}
