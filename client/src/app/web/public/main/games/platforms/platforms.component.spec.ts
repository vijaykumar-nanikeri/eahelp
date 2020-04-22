import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlatformsComponent } from './platforms.component';

describe('PlatformsComponent', () => {
  let component: PlatformsComponent;
  let fixture: ComponentFixture<PlatformsComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'getPlatforms');
    spyOn(component, 'getViewContainerRef');
    spyOn(component, 'getTopics');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPlatforms should be called', () => {
    component.getPlatforms();
    expect(component.getPlatforms).toHaveBeenCalled();
  });

  it('getViewContainerRef should be called', () => {
    component.getViewContainerRef();
    expect(component.getViewContainerRef).toHaveBeenCalled();
  });

  it('getTopics should be called', () => {
    component.getTopics({});
    expect(component.getTopics).toHaveBeenCalled();
  });
});
