import { Test } from '@nestjs/testing';
import { ServerFeatureQuoteService } from './server-feature-quote.service';

describe('ServerFeatureQuoteService', () => {
  let service: ServerFeatureQuoteService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServerFeatureQuoteService],
    }).compile();

    service = module.get(ServerFeatureQuoteService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
