import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestingModule } from '@src/test-helpers/testing.module';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, BrowserAnimationsModule],
      declarations: [ModalComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ModalComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display modal', () => {
    expect(fixture.debugElement.query(By.css('.wrap-modal'))).toBeDefined();
  });

  it('should display modal-box', () => {
    component.id = 'example';
    expect(fixture.debugElement.query(By.css('.modal-box'))).toBeDefined();
  });

  it('should set showModal$ to false', () => {
    component.showModal = false;
    expect(component.showModal$).toBeFalsy();
    expect(component.counterClicks).toBe(0);
  });

  it('should set showModal$ to true', () => {
    component.showModal = true;
    expect(component.showModal$).toBeTruthy();
  });

  it('should close modal with scape key', () => {
    spyOn(component.closeModal, 'emit');
    component.escapeKeyDown();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });
});
