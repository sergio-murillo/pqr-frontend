import { Injectable } from '@angular/core';

@Injectable()
export abstract class IWebStorageService {
  abstract setItem(key: string, value: string): void;
  abstract removeItem(key: string): void;
  abstract getItem(key: string): string;
  abstract hasItem(key: string): boolean;
}
