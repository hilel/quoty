import { Injectable, NotFoundException } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

import { IQuote } from '@qt/shared/domain';

@Injectable()
export class ServerFeatureQuoteService {
    private quotes$$ = new BehaviorSubject<IQuote[]>(getMockQuotes().quotes as any[]);
    
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

function getMockQuotes() {
    return {
        "quotes": [
          {
            "id": '1',
            "text": "The only way to do great work is to love what you do.",
            "authorId": '1',
            "author": {
              "authorId": '1',
              "name": "Steve Jobs"
            },
            "categoryId": '1',
            "category": {
              "categoryId": '1',
              "name": "Inspiration"
            },
            "createdDate": "2023-08-18T00:00:00.000Z"
          },
          {
            "id": '2',
            "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "authorId": '2',
            "author": {
              "authorId": '2',
              "name": "Nelson Mandela"
            },
            "categoryId": '2',
            "category": {
              "categoryId": '2',
              "name": "Wisdom"
            },
            "createdDate": "2023-08-18T00:00:00.000Z"
          },
          {
            "id": '3',
            "text": "Life is what happens when you're busy making other plans.",
            "authorId": '3',
            "author": {
              "authorId": '3',
              "name": "John Lennon"
            },
            "categoryId": '3',
            "category": {
              "categoryId": '3',
              "name": "Life"
            },
            "createdDate": "2023-08-18T00:00:00.000Z"
          }
        ]
      };
}
