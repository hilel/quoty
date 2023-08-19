import { Quote } from './quote';

export class Author {
    authorId: number;
    name: string;
    biography?: string;
    quotes: Quote[];
}
  