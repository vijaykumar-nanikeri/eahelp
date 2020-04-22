import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { RestApiService } from '../../../../../../shared/services/rest-api/rest-api.service';
import { IsArrayDataService } from '../../../../../../shared/services/is-array-data/is-array-data.service';
import { TrackByService } from '../../../../../../shared/services/track-by/track-by.service';
import { FlatCheckObjectService } from '../../../../../../shared/services/flat-check-object/flat-check-object.service';

import {
  RestApiResponseStatusTypesEnum,
  NotifyEnum
} from '../../../../../../shared/enums/shared-enum.enum';
import { UrlsEnum } from '../../../../../../shared/enums/urls/urls.enum';

import { EmailDirective } from './directives/email.directive';

import { EmailComponent } from './email/email.component';

@Component({
  selector: 'ea-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  @Input() data: any;

  @ViewChild(EmailDirective, { static: true }) eaEmail: EmailDirective;

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
    this.restData['gamePlatformData'] = this.data;
    this.restData['topics'] = [];

    this.formData['notify'] = NotifyEnum.LOADING;
    this.formData['topicSelected'] = {};

    this.getTopics();
  }

  /**
   * @returns void
   */
  public getTopics(): void {
    this.formData['notify'] = NotifyEnum.LOADING;
    this.restData['topics'] = [];

    const objectLevelsForGameId: string[] = ['gamePlatformData', 'game', 'id'];
    const objectLevelsForPlatformId: string[] = ['gamePlatformData', 'platform', 'id'];

    const gameId: any = this.flatCheckObjectService.flatCheckObject(this.restData, objectLevelsForGameId);
    const platformId: any = this.flatCheckObjectService.flatCheckObject(this.restData, objectLevelsForPlatformId);

    const requestJson: object = {
      gameId: gameId,
      platformId: platformId
    };

    if (gameId && platformId) {
      this.restApiService.post(UrlsEnum.TOPICS, requestJson).subscribe(data => {
        switch (data['statusType']) {
          case RestApiResponseStatusTypesEnum.SUCCESS:
            if (this.isArrayDataService.isArrayData(data, 'data')) {
              // Intentional timeout for experiencing the animated `Loading...` notification.
              setTimeout(() => {
                this.formData['notify'] = NotifyEnum.DEFAULT;
                this.restData['topics'] = (data['data'] || []);
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
   * @param  {object} topic
   * @returns void
   */
  public email(topic: object): void {
    this.formData['topicSelected'] = topic;

    // Dynamically creating `EmailComponent`.
    // [START] >>
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EmailComponent);

    const viewContainerRef = this.eaEmail.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    const data: object = Object.assign({}, this.restData['gamePlatformData']);
    data['topic'] = topic;
    (componentRef.instance).data = data;
    // << [END]
  }

}
