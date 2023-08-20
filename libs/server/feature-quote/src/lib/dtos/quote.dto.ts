import { IsDate, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { IAuthor, ICategory, ICreateQuote, IUpdateQuote, IUpsertQuote } from '@qt/shared/domain';
  
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateQuoteDto implements ICreateQuote {
    @IsString()
    @IsNotEmpty()
    text!: string;
  }
  
  export class UpsertQuoteDto implements IUpsertQuote {
    @IsString()
    @IsNotEmpty()
    id!: string;

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