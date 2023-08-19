import { Test } from '@nestjs/testing';
import { ServerFeatureQuoteController } from './server-feature-quote.controller';
import { ServerFeatureQuoteService } from './server-feature-quote.service';

describe('ServerFeatureQuoteController', () => {
  let controller: ServerFeatureQuoteController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureQuoteService],
      controllers: [ServerFeatureQuoteController],
    }).compile();

    controller = module.get(ServerFeatureQuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
