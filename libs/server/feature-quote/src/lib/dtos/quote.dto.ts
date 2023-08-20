import { IsDate, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { IAuthor, ICategory, ICreateQuote, IQuote, IUpdateQuote, IUpsertQuote } from '@qt/shared/domain';

/**
 * This DTO was added so that a class can be used as a return type in the
 * Swagger documentation. All properties are marked `readOnly` in the
 * ApiProperty decorator since this DTO will only be used for responses.
 *
 * @export
 * @class QuoteDto
 * @typedef {QuoteDto}
 * @implements {IQuote}
 */
export class QuoteDto implements IQuote {
  @ApiProperty({
    type: String,
    example: `Be like a water my friend`,
    readOnly: true,
  })
  @IsString()
  @IsNotEmpty()
  text!: string;

  @ApiProperty({
    type: String,
    readOnly: true,
    example: 'ABC76FCC-F6CF-4211-A9F5-FE4E24381AB8',
  })
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    type: String,
    readOnly: true,
    example: 'ABC76FCC-F6CF-4211-A9F5-FE4E24381AB8',
  })
  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  @ApiProperty({
    type: String,
    readOnly: true,
    example: 'ABC76FCC-F6CF-4211-A9F5-FE4E24381AB8',
  })
  @IsString()
  @IsNotEmpty()
  authorId!: string;

  @ApiProperty({
    type: Date,
    readOnly: true
  })
  @IsDate()
  @IsNotEmpty()
  createdDate!: Date;

  @ApiProperty({
    type: String,
    readOnly: true,
    example: 'Some book details'
  })
  @IsString()
  @IsOptional()
  source!: string;
}
  
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateQuoteDto implements ICreateQuote {
  @IsString()
  @IsNotEmpty()
  text!: string;
}

// TODO Decorate all properties with @ApiProperty(...)
  
export class UpsertQuoteDto implements IUpsertQuote {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @ApiProperty({
    type: String,
    example: `Be like a water my friend`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  text!: string;

  @IsString()
  @IsNotEmpty()
  categoryId!: string;

  @IsObject()
  @IsNotEmpty()
  category!: ICategory;

  @IsDate()
  @IsNotEmpty()
  createdDate!: Date;

  @IsString()
  @IsOptional()
  authorId!: string;

  @IsString()
  @IsOptional()
  author!: IAuthor;
}

export class UpdateQuoteDto implements IUpdateQuote {
  @IsString()
  @IsOptional()
  text!: string;

  @IsString()
  @IsOptional()
  categoryId!: string;

  @IsObject()
  @IsOptional()
  category!: ICategory;

  @IsDate()
  @IsOptional()
  createdDate!: Date;

  @IsString()
  @IsOptional()
  authorId!: string;

  @IsString()
  @IsOptional()
  author!: IAuthor;
}