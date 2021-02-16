import { IWebStorageService } from '../entities/browser.entities';
import {
  LocalStorageService,
  SessionStorageService,
} from './webstorage.service';

describe('IWebStorageService', () => {
  let localStorageService: IWebStorageService;
  let sessionStorageService: IWebStorageService;

  beforeEach(() => {
    localStorageService = new LocalStorageService();
    sessionStorageService = new SessionStorageService();
    // Localstorage
    spyOn(localStorage, 'getItem');
    spyOn(localStorage, 'setItem').and.callFake((key, value) => {});
    spyOn(localStorage, 'removeItem').and.callFake((key) => {});
    // SessionStorage
    spyOn(sessionStorage, 'getItem');
    spyOn(sessionStorage, 'setItem').and.callFake((key, value) => {});
    spyOn(sessionStorage, 'removeItem').and.callFake((key) => {});
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
    expect(sessionStorageService).toBeTruthy();
  });

  it('should set item', () => {
    localStorageService.setItem('Example', 'key_0');
    sessionStorageService.setItem('Example', 'key_0');
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(sessionStorage.setItem).toHaveBeenCalled();
  });

  it('should remove item', () => {
    localStorageService.removeItem('Example');
    sessionStorageService.removeItem('Example');
    expect(localStorage.removeItem).toHaveBeenCalled();
    expect(sessionStorage.removeItem).toHaveBeenCalled();
  });

  it('should get item', () => {
    localStorage.getItem('Example');
    sessionStorage.getItem('Example');
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(sessionStorage.getItem).toHaveBeenCalled();
  });
});
