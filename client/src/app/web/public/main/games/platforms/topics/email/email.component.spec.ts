import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { EmailComponent } from './email.component';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'createEmailForm');
    spyOn(component, 'getSubject');
    spyOn(component, 'updateSubjectPart');
    spyOn(component, 'getField');
    spyOn(component, 'isInvalid');
    spyOn(component, 'send');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createEmailForm should be called', () => {
    component.createEmailForm();
    expect(component.createEmailForm).toHaveBeenCalled();
  });

  it('getSubject should be called', () => {
    component.getSubject();
    expect(component.getSubject).toHaveBeenCalled();
  });

  it('updateSubjectPart should be called', () => {
    component.updateSubjectPart([], ``);
    expect(component.updateSubjectPart).toHaveBeenCalled();
  });

  it('getField should be called', () => {
    component.getField('');
    expect(component.getField).toHaveBeenCalled();
  });

  it('isInvalid should be called', () => {
    component.isInvalid('');
    expect(component.isInvalid).toHaveBeenCalled();
  });

  it('send should be called', () => {
    component.send();
    expect(component.send).toHaveBeenCalled();
  });
});
