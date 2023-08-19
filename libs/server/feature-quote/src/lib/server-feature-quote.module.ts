import { Module } from '@nestjs/common';
import { ServerFeatureQuoteController } from './server-feature-quote.controller';
import { ServerFeatureQuoteService } from './server-feature-quote.service';

@Module({
  controllers: [ServerFeatureQuoteController],
  providers: [ServerFeatureQuoteService],
  exports: [ServerFeatureQuoteService],
})
export class ServerFeatureQuoteModule {}
