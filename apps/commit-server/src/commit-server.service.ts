import { Injectable } from '@nestjs/common';

@Injectable()
export class CommitServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
