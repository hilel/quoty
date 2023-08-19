import { IQuote } from './quote.interface';

export interface ICategory {
    categoryId: string;
    name: string;
    quotes: IQuote[];
}