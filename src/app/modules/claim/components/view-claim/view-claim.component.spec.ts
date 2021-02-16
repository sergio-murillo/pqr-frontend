import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestingModule } from '@src/test-helpers/testing.module';
import { ViewClaimComponent } from './view-claim.component';
import { ClaimFacade } from '../../store/claim.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/claim.reducer';

describe('ViewClaimComponent', () => {
  let component: ViewClaimComponent;
  let fixture: ComponentFixture<ViewClaimComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [ViewClaimComponent],
      providers: [ClaimFacade, provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClaimComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create ViewClaimComponent', () => {
    expect(component).toBeTruthy();
  });
});
