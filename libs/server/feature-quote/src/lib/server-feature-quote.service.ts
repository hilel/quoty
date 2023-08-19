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

    create(quote: IQuote): IQuote {
        const current = this.quotes$$.value;
        this.quotes$$.next([...current, quote]);
        return quote;
    }
}
