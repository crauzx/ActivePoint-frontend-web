import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareNavBarService {

  constructor() { }

  private activeNumber$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public setNavActiveNumber(activeNumber: number): void {
    // Sets new value, every entity, which is subscribed to changes (`getNavTitle().subscribe(...)`) will get new value every time it changes
    this.activeNumber$.next(activeNumber);
  }

  public getNavActiveNumber(): Observable<number> {
    // Allow to `subscribe` on changes and get the value every time it changes
    return this.activeNumber$.asObservable();
  }

}
