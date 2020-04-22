import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component, 'getGames');
    spyOn(component, 'getPlatforms');
    spyOn(component, 'getViewContainerRef');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getGames should be called', () => {
    component.getGames();
    expect(component.getGames).toHaveBeenCalled();
  });

  it('getPlatforms should be called', () => {
    component.getPlatforms({});
    expect(component.getPlatforms).toHaveBeenCalled();
  });

  it('getViewContainerRef should be called', () => {
    component.getViewContainerRef();
    expect(component.getViewContainerRef).toHaveBeenCalled();
  });
});
