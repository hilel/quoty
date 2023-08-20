import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IQuote } from '@qt/shared/domain';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  getAllQuoteItems(): Observable<IQuote[]> {
    return this.http.get<IQuote[]>(`/api/quotes`);
  }

  getQuoteById(quoteId: string): Observable<IQuote> {
    return this.http.get<IQuote>(`/api/quotes/${quoteId}`);
  }

  createQuote(quoteData: IQuote): Observable<IQuote> {
    return this.http.post<IQuote>(`/api/quotes`, quoteData);
  }

  updateQuote(quoteId: string, quoteData: IQuote): Observable<IQuote> {
    return this.http.patch<IQuote>(`/api/quotes/${quoteId}`, quoteData);
  }

  createOrUpdateQuote(quoteId: string, quoteData: IQuote): Observable<IQuote> {
    return this.http.put<IQuote>(`/api/quotes/${quoteId}`, quoteData);
  }

  deleteQuote(quoteId: string): Observable<IQuote> {
    return this.http.delete<never>(`/api/quotes/${quoteId}`);
  }
}