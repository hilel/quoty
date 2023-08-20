import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuoteEntitySchema } from './schemas/quote.entity-schema';

@Module({
    imports: [TypeOrmModule.forFeature([QuoteEntitySchema])],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
