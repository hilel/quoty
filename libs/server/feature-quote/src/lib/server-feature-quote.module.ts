import { Module } from '@nestjs/common';

import { ServerFeatureQuoteController } from './server-feature-quote.controller';
import { ServerFeatureQuoteService } from './server-feature-quote.service';
import { ServerDataAccessQuoteModule } from '@qt/server/data-access-quote';

@Module({
  controllers: [ServerFeatureQuoteController],
  imports: [ServerDataAccessQuoteModule],
  providers: [ServerFeatureQuoteService],
  exports: [ServerFeatureQuoteService],
})
export class ServerFeatureQuoteModule {}
