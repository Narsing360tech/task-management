import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {
  formDataSubject = new BehaviorSubject<any>(null);
  constructor() { }
}
