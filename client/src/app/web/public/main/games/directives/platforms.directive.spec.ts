import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsDirective } from './platforms.directive';

import { PlatformsComponent } from '../platforms/platforms.component';

describe('PlatformsDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlatformsComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(PlatformsComponent);
    const component = fixture.debugElement.componentInstance;

    const directive = new PlatformsDirective(component);
    expect(directive).toBeTruthy();
  });
});
