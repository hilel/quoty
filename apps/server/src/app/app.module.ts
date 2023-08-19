import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureQuoteModule } from '@qt/server/feature-quote';

@Module({
  imports: [ServerFeatureQuoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
