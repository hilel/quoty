import { IFavorite } from "./favorite.interface";

export interface IUser {
    userId: string;
    username: string;
    favorites: IFavorite[];
}
  