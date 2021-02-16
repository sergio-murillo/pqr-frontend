import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestingModule } from '@src/test-helpers/testing.module';
import { CreateClaimComponent } from './create-claim.component';
import { ClaimFacade } from '../../store/claim.facade';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/claim.reducer';

describe('CreateClaimComponent', () => {
  let component: CreateClaimComponent;
  let fixture: ComponentFixture<CreateClaimComponent>;
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [CreateClaimComponent],
      providers: [ClaimFacade, provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClaimComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create CreateClaimComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should save claim', () => {
    spyOn(component.claimFacade, 'requestCreate');
    component.saveClaim({
      title: 'TITLE',
      description: 'DESCRIPTION',
      requestId: '1234567',
      state: 'CREATED',
    });
    expect(component.claimFacade.requestCreate).toHaveBeenCalled();
  });
});
