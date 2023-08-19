import { IUser } from './user.interface';
import { IQuote } from './quote.interface';


export interface IFavorite {
    favoriteId: string;
    userId: string;
    user: IUser;
    quoteId: string;
    quote: IQuote;
}
  