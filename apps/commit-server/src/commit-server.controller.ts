import { Controller, Get } from '@nestjs/common';
import { CommitServerService } from './commit-server.service';

@Controller()
export class CommitServerController {
  constructor(private readonly commitServerService: CommitServerService) {}

  @Get()
  getHello(): string {
    return this.commitServerService.getHello();
  }
}
