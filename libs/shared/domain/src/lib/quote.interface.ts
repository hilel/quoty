import { IAuthor } from "./author.inteface";
import { ICategory } from "./category.interface";

export interface IQuote {
    id: string;
    text: string;
    authorId: string;
    categoryId: string;
    category: ICategory;
    createdDate: Date;
    source?: string;
}
  