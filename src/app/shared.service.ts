import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly tokenInfo$ = new ReplaySubject<any>();
  isUseInfo = false;

  constructor() { }

  setTokenInfo(info): void {
    this.tokenInfo$.next(info);
  }

  getTokenInfo(): Observable<any> {
    return this.tokenInfo$.asObservable();
  }
}
