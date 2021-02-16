import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestingModule } from '@src/test-helpers/testing.module';
import { SearchClaimsComponent } from './search-claims.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ClaimFacade } from '../../store/claim.facade';
import { initialState } from '../../store/claim.reducer';

describe('SearchClaimsComponent', () => {
  let component: SearchClaimsComponent;
  let fixture: ComponentFixture<SearchClaimsComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [SearchClaimsComponent],
      providers: [ClaimFacade, provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClaimsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create SearchClaimsComponent', () => {
    expect(component).toBeTruthy();
  });
});
