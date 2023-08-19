import { Injectable, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

import { IQuote } from '@qt/shared/domain';

@Injectable()
export class ServerFeatureQuoteService {
    private quotes$$ = new BehaviorSubject<IQuote[]>([
        {
            id: 'some-id',
            text: 'Be like a water, my friend!',
            authorId: 'Bruce Lee'
        } as IQuote
    ]);
    
    getAll(): IQuote[] {
        return this.quotes$$.value;
    }

    getOne(id: string): IQuote | undefined {
        const quote = this.quotes$$.value.find(q => q.id === id);
        if (!quote) {
            throw new NotFoundException(`Quote could not be found!`)
        }
        return quote;
    }

    create(quote: Pick<IQuote, 'text'>): IQuote {
        const current = this.quotes$$.value;
        // Use the incoming data, a randomized ID, and a default values for some properties
        const newQuote: IQuote = {
            ...quote,
            id: `qt-${Math.floor(Math.random() * 10000)}`,
            authorId: 'Unknown Author'
        } as IQuote;
        this.quotes$$.next([...current, newQuote]);
        return newQuote;
    }
}
