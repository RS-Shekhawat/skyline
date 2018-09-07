import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy {

  private storage = new Subject<{ key: string, value: any }>();
  public changes = this.storage.asObservable().pipe(share());

  constructor() {
    this.start();
  }

  ngOnDestroy() {
    this.stop();
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    this.storage.next({key, value});
  }

  getItem<T>(key: string): T {
    const item = localStorage.getItem(key);
    if (typeof item === 'undefined' || item === null) {
      return null;
    }
    return JSON.parse(item) as T;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    this.storage.next({key: key, value: null});
  }

  private start(): void {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      let v;
      try {
        v = JSON.parse(event.newValue);
      } catch (e) {
        v = event.newValue;
      }
      this.storage.next({key: event.key, value: v});
    }
  }

  private stop(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
    this.storage.complete();
  }

}
