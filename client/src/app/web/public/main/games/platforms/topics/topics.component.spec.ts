import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TopicsComponent } from './topics.component';

describe('TopicsComponent', () => {
  let component: TopicsComponent;
  let fixture: ComponentFixture<TopicsComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'getTopics');
    spyOn(component, 'email');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTopics should be called', () => {
    component.getTopics();
    expect(component.getTopics).toHaveBeenCalled();
  });

  it('email should be called', () => {
    component.email({});
    expect(component.email).toHaveBeenCalled();
  });
});
