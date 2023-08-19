import { Author } from "./author";
import { Category } from "./category";

export class Quote {
    quoteId: number;
    quoteText: string;
    authorId: number;
    author: Author;
    categoryId: number;
    category: Category;
    createdDate: Date;
    source?: string;
}
  