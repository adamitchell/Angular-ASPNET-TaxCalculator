import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TaxCalculatorService {
    url = '/api/TaxCalculator';
    constructor(private http: HttpClient) { }

    getCalculatedTax(income: number, zipCode: number) : Observable<string> {
        let extendedUrl = this.url + '/GetCalculatedTax/' + income + '/' + zipCode;
        return this.http.get<any>(extendedUrl)
            .pipe(
                map(res => res),
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('Server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Server error');
    }
}