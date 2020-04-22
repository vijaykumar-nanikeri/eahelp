import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TopicsDirective } from './topics.directive';

import { TopicsComponent } from '../topics/topics.component';

describe('TopicsDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopicsComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    const fixture = TestBed.createComponent(TopicsComponent);
    const component = fixture.debugElement.componentInstance;

    const directive = new TopicsDirective(component);
    expect(directive).toBeTruthy();
  });
});
