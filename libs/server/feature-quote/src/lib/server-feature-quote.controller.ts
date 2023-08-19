import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ServerFeatureQuoteService } from './server-feature-quote.service';
import { IQuote } from '@qt/shared/domain';

@Controller('server-feature-quote')
export class ServerFeatureQuoteController {
  constructor(private serverFeatureQuoteService: ServerFeatureQuoteService) {}

  @Get('')
  getAll(): IQuote[] {
    return this.serverFeatureQuoteService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IQuote | undefined {
    return this.serverFeatureQuoteService.getOne(id);
  }

  @Post('')
  create(@Body() data: IQuote): IQuote {
    return this.serverFeatureQuoteService.create(data);
  }
}