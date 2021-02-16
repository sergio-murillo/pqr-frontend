import { Injectable } from '@angular/core';

@Injectable()
export class WebStorageServiceMock {
  setItem(key: string, value: string): void { }

  removeItem(key: string): void { }

  getItem(key: string): string { return key; }
}
