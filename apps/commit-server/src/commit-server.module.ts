import { Module } from '@nestjs/common';
import { CommitServerController } from './commit-server.controller';
import { CommitServerService } from './commit-server.service';

@Module({
  imports: [],
  controllers: [CommitServerController],
  providers: [CommitServerService],
})
export class CommitServerModule {}
