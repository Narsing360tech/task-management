import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TextResolver implements Resolve<string> {
    resolve(): Observable<string> {
        return of('This is the simple text from the resolver.');
    }
}
