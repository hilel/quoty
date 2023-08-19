import { IsNotEmpty, IsString } from 'class-validator';
import { IQuote } from '@qt/shared/domain';
  
/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateQuoteDto implements Pick<IQuote, 'text'> {
    @IsString()
    @IsNotEmpty()
    text!: string;
}