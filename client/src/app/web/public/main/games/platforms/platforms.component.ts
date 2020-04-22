import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { RestApiService } from '../../../../../shared/services/rest-api/rest-api.service';
import { IsArrayDataService } from '../../../../../shared/services/is-array-data/is-array-data.service';
import { TrackByService } from '../../../../../shared/services/track-by/track-by.service';
import { FlatCheckObjectService } from '../../../../../shared/services/flat-check-object/flat-check-object.service';

import {
  RestApiResponseStatusTypesEnum,
  NotifyEnum
} from '../../../../../shared/enums/shared-enum.enum';
import { UrlsEnum } from '../../../../../shared/enums/urls/urls.enum';

import { TopicsDirective } from './directives/topics.directive';

import { TopicsComponent } from './topics/topics.component';

@Component({
  selector: 'ea-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  @Input() data: any;

  @ViewChild(TopicsDirective, { static: true }) eaTopics: TopicsDirective;

  // Global abatement (data containers)
  // [START] >>
  // public metaData: object = {};
  // public confData: object = {};
  // public infoData: object = {};

  public restData: object = {};
  public formData: object = {};
  // public responseData: object = {};
  // public submitData: object = {};
  // << [END]

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private restApiService: RestApiService,
    private isArrayDataService: IsArrayDataService,
    public trackByService: TrackByService,
    private flatCheckObjectService: FlatCheckObjectService
  ) { }

  ngOnInit(): void {
    this.restData['gameData'] = this.data;
    this.restData['platforms'] = [];

    this.formData['notify'] = NotifyEnum.LOADING;
    this.formData['platformSelected'] = {};

    this.getPlatforms();
  }

  /**
   * @returns void
   */
  public getPlatforms(): void {
    this.formData['notify'] = NotifyEnum.LOADING;
    this.restData['games'] = [];

    const objectLevels: string[] = ['gameData', 'game', 'id'];
    const gameId: any = this.flatCheckObjectService.flatCheckObject(this.restData, objectLevels);
    const requestJson: object = {
      gameId: gameId
    };

    if (gameId) {
      this.restApiService.post(UrlsEnum.PLATFORMS, requestJson).subscribe(data => {
        switch (data['statusType']) {
          case RestApiResponseStatusTypesEnum.SUCCESS:
            if (this.isArrayDataService.isArrayData(data, 'data')) {
              // Intentional timeout for experiencing the animated `Loading...` notification.
              setTimeout(() => {
                this.formData['notify'] = NotifyEnum.DEFAULT;
                this.restData['platforms'] = (data['data'] || []);
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
    } else {
      this.formData['notify'] = NotifyEnum.SOMETHING_WENT_WRONG;
    }
  }

  /**
   * @returns ViewContainerRef
   */
  public getViewContainerRef(): ViewContainerRef {
    return this.eaTopics.viewContainerRef;
  }

  /**
   * @returns void
   */
  public changePlatform(): void {
    this.formData['platformSelected'] = {};
    this.getViewContainerRef().clear();
  }

  /**
   * @param  {object} platform
   * @returns void
   */
  public getTopics(platform: object): void {
    this.formData['platformSelected'] = platform;

    // Dynamically creating `TopicsComponent`.
    // [START] >>
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TopicsComponent);

    const viewContainerRef = this.getViewContainerRef();
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    const data: object = Object.assign({}, this.restData['gameData']);
    data['platform'] = platform;
    (componentRef.instance).data = data;
    // << [END]
  }

}
