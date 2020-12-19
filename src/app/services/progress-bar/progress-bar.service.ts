import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor() { }

  private show$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  public setShow(show: boolean): void {
    this.show$.next(show)
  }

  public getShow(): Observable<boolean> {
    return this.show$.asObservable()
  }
}
