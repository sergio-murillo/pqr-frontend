import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestingModule } from '@src/test-helpers/testing.module';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create FormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should not save claim', () => {
    component.saveClaim();
    expect(component.formSubmitted).toBeTruthy();
  });

  it('should save claim', () => {
    spyOn(component.save, 'emit');
    component.formGroup.get('title').setValue('TITLE');
    component.formGroup.get('description').setValue('DESCRIPTION');
    component.formGroup.get('request').setValue('REQUEST');
    component.saveClaim();
    expect(component.formSubmitted).toBeFalsy();
    expect(component.save.emit).toHaveBeenCalled();
  });
});
