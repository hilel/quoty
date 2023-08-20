import { IAuthor } from "./author.inteface";
import { ICategory } from "./category.interface";

export interface IQuote {
    id: string;
    text: string;
    authorId?: string;
    author?: IAuthor;
    categoryId: string;
    category: ICategory;
    createdDate: Date;
    source?: string;
}

export type ICreateQuote = Pick<IQuote, 'text'>;
export type IUpdateQuote = Partial<Omit<IQuote, 'id'>>;
export type IUpsertQuote = IQuote;
