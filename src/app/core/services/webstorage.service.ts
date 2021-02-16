import { Injectable } from '@angular/core';
import { TEMPORAL_PASS } from '../constants/common.constants';

import { IWebStorageService } from '../entities/browser.entities';
import { decrypt, encrypt } from '../helpers/security.helper';

/**
 * Clase encargada de implementar web storage
 */
@Injectable()
export class LocalStorageService implements IWebStorageService {
  public setItem(key: string, value: string): void {
    localStorage.setItem(
      encrypt(key, TEMPORAL_PASS),
      encrypt(value, TEMPORAL_PASS),
    );
  }

  public removeItem(key: string): void {
    localStorage.removeItem(this.findItem(key));
  }

  public getItem(key: string): string {
    return decrypt(localStorage[this.findItem(key)], TEMPORAL_PASS);
  }

  public hasItem(key: string): boolean {
    return Object.keys(localStorage).some(
      (value) => decrypt(value, TEMPORAL_PASS) === key,
    );
  }

  private findItem(key: string): string {
    return (
      Object.keys(localStorage).find(
        (value) => decrypt(value, TEMPORAL_PASS) === key,
      ) || ''
    );
  }
}

@Injectable()
export class SessionStorageService implements IWebStorageService {
  public setItem(key: string, value: string): void {
    sessionStorage.setItem(
      encrypt(key, TEMPORAL_PASS),
      encrypt(value, TEMPORAL_PASS),
    );
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(this.findItem(key));
  }

  public getItem(key: string): string {
    return decrypt(localStorage[this.findItem(key)], TEMPORAL_PASS);
  }

  public hasItem(key: string): boolean {
    return Object.keys(sessionStorage).some(
      (value) => decrypt(value, TEMPORAL_PASS) === key,
    );
  }

  private findItem(key: string): string {
    return (
      Object.keys(sessionStorage).find(
        (value) => decrypt(value, TEMPORAL_PASS) === key,
      ) || ''
    );
  }
}
