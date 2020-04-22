import { Component, OnInit } from '@angular/core';

import { EaAppEnum } from '../../../shared/enums/shared-enum.enum';

@Component({
  selector: 'ea-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Global abatement (data containers)
  // [START] >>
  // public metaData: object = {};
  // public confData: object = {};
  // public infoData: object = {};

  public restData: object = {};
  // public formData: object = {};
  // public responseData: object = {};
  // public submitData: object = {};
  // << [END]

  constructor() { }

  ngOnInit(): void {
    this.restData['appInfo'] = {};
    this.restData['appInfo']['appName'] = EaAppEnum.NAME;
  }

}
