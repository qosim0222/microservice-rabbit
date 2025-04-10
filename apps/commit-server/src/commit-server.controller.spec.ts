import { Test, TestingModule } from '@nestjs/testing';
import { CommitServerController } from './commit-server.controller';
import { CommitServerService } from './commit-server.service';

describe('CommitServerController', () => {
  let commitServerController: CommitServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommitServerController],
      providers: [CommitServerService],
    }).compile();

    commitServerController = app.get<CommitServerController>(CommitServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commitServerController.getHello()).toBe('Hello World!');
    });
  });
});
