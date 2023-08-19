import { IQuote } from './quote.interface';

export interface IAuthor {
    authorId: string;
    name: string;
    biography?: string;
    quotes: IQuote[];
}
  