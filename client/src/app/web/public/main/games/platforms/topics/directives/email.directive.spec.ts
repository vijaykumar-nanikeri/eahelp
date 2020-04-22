import { TestBed, async } from '@angular/core/testing';

import { EmailDirective } from './email.directive';

import { EmailComponent } from '../email/email.component';

describe('EmailDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmailComponent
      ]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(EmailComponent);
    const component = fixture.debugElement.componentInstance;

    const directive = new EmailDirective(component);
    expect(directive).toBeTruthy();
  });
});
