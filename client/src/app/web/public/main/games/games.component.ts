import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { RestApiService } from '../../../../shared/services/rest-api/rest-api.service';
import { IsArrayDataService } from '../../../../shared/services/is-array-data/is-array-data.service';
import { TrackByService } from '../../../../shared/services/track-by/track-by.service';

import {
  RestApiResponseStatusTypesEnum,
  NotifyEnum
} from '../../../../shared/enums/shared-enum.enum';
import { UrlsEnum } from '../../../../shared/enums/urls/urls.enum';

import { PlatformsDirective } from './directives/platforms.directive';

import { PlatformsComponent } from './platforms/platforms.component';

@Component({
  selector: 'ea-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {

  @ViewChild(PlatformsDirective, { static: true }) eaPlatforms: PlatformsDirective;

  onSearchingGame: Subject<string> = new Subject<string>();
  searchingGames$: Subscription;

  // Global abatement (data containers)
  // [START] >>
  // public metaData: object = {};
  // public confData: object = {};
  // public infoData: object = {};

  public restData: object = {};
  public formData: object = {};
  // public responseData: object = {};
  public submitData: object = {};
  // << [END]

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private restApiService: RestApiService,
    private isArrayDataService: IsArrayDataService,
    public trackByService: TrackByService
  ) {
    // Accepting only the last entered search token after a timeout of 1/3rd of a second.
    this.searchingGames$ = this.onSearchingGame
      .pipe(
        debounceTime(750),
        distinctUntilChanged()
      )
      .subscribe(newModel => {
        this.submitData['game'] = newModel;
        (this.submitData['game'] ? this.searchingGames() : this.getGames());
      });
  }

  ngOnInit(): void {
    this.restData['games'] = [];

    this.formData['notify'] = NotifyEnum.LOADING;
    this.formData['gameSelected'] = {};

    this.getGames();
  }

  ngOnDestroy(): void {
    this.searchingGames$.unsubscribe();
  }

  /**
   * @returns void
   */
  public getGames(): void {
    this.formData['notify'] = NotifyEnum.LOADING;
    this.restData['games'] = [];

    this.restApiService.get(UrlsEnum.GAMES).subscribe(data => {
      switch (data['statusType']) {
        case RestApiResponseStatusTypesEnum.SUCCESS:
          if (this.isArrayDataService.isArrayData(data, 'data')) {
            // Intentional timeout for experiencing the animated `Loading...` notification.
            setTimeout(() => {
              this.formData['notify'] = NotifyEnum.DEFAULT;
              this.restData['games'] = (data['data'] || []);
            }, 500);
          } else {
            this.formData['notify'] = NotifyEnum.NO_RECORDS_FOUND;
          }
          break;

        case RestApiResponseStatusTypesEnum.ERROR:
          this.formData['notify'] = NotifyEnum.SOMETHING_WENT_WRONG;
          break;
      }
    });
  }

  /**
   * @returns void
   */
  public searchingGames(): void {
    this.formData['notify'] = NotifyEnum.LOADING;
    this.restData['games'] = [];

    const requestJson: object = {
      game: this.submitData['game']
    };

    this.restApiService.post(UrlsEnum.SEARCH_GAMES, requestJson).subscribe(data => {
      switch (data['statusType']) {
        case RestApiResponseStatusTypesEnum.SUCCESS:
          if (this.isArrayDataService.isArrayData(data, 'data')) {
            // Intentional timeout for experiencing the animated `Loading...` notification.
            setTimeout(() => {
              this.formData['notify'] = NotifyEnum.DEFAULT;
              this.restData['games'] = (data['data'] || []);
            }, 500);
          } else {
            this.formData['notify'] = NotifyEnum.NO_RECORDS_FOUND;
          }
          break;

        case RestApiResponseStatusTypesEnum.ERROR:
          this.formData['notify'] = NotifyEnum.SOMETHING_WENT_WRONG;
          break;
      }
    });
  }

  /**
   * @returns ViewContainerRef
   */
  public getViewContainerRef(): ViewContainerRef {
    return this.eaPlatforms.viewContainerRef;
  }

  /**
   * @returns void
   */
  public changeGame(): void {
    this.formData['gameSelected'] = {};
    this.getViewContainerRef().clear();
  }

  /**
   * @param  {object} game
   * @returns void
   */
  public getPlatforms(game: object): void {
    this.formData['gameSelected'] = game;

    // Dynamically creating `PlatformsComponent`.
    // [START] >>
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PlatformsComponent);

    const viewContainerRef = this.getViewContainerRef();
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = { game: game };
    // << [END]
  }

}
