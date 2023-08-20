import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

import { ServerFeatureQuoteService } from './server-feature-quote.service';
import { IQuote } from '@qt/shared/domain';
import { CreateQuoteDto, QuoteDto } from './dtos/quote.dto';

@Controller('quotes')
export class ServerFeatureQuoteController {
  constructor(private serverFeatureQuoteService: ServerFeatureQuoteService) {}

  @Get('')
  @ApiOkResponse({
    type: QuoteDto,
    isArray: true,
  })
  @ApiOperation({
    summary: 'Returns all quotes',
    tags: ['quotes'],
  })
  async getAll(): Promise<IQuote[]> {
    return await this.serverFeatureQuoteService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<IQuote> {
    return await this.serverFeatureQuoteService.getOne(id);
  }

  @Post('')
  async create(@Body() data: CreateQuoteDto): Promise<IQuote> {
    return await this.serverFeatureQuoteService.create(data);
  }
}
