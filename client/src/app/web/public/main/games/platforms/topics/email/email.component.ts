import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FlatCheckObjectService } from '../../../../../../../shared/services/flat-check-object/flat-check-object.service';

import { FIELDS } from './email.model';

@Component({
  selector: 'ea-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input() data: any;

  emailForm: FormGroup;

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

  constructor(private flatCheckObjectService: FlatCheckObjectService) { }

  ngOnInit(): void {
    this.restData['gamePlatformTopicData'] = (this.data || {});
    this.restData['fields'] = FIELDS;

    this.formData['isEmailFormSubmitted'] = false;
    this.formData['emailSent'] = false;

    this.createEmailForm();
  }

  /**
   * @returns void
   */
  public createEmailForm(): void {
    // Forming the email subject with the previously selected Game, Platform, and Topic.
    const subject: string = this.getSubject();

    // The pattern for 'Mobile No' validation.
    const mobileNoPattern: string = "^((\\+91-?)|0)?[0-9]{10}$";

    // 'Mobile No' and 'Email ID' validation.
    const mobileNoFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(mobileNoPattern)]);
    const emailIdFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
    const subjectFormControl: FormControl = new FormControl(subject, Validators.required);
    const messageFormControl: FormControl = new FormControl('', Validators.required);

    this.emailForm = new FormGroup({
      mobileNo: mobileNoFormControl,
      emailId: emailIdFormControl,
      subject: subjectFormControl,
      message: messageFormControl
    });
  }

  /**
   * @returns string
   */
  public getSubject(): string {
    const subjectParts: string[] = [];
    this.updateSubjectPart(subjectParts, 'game');
    this.updateSubjectPart(subjectParts, 'platform');
    this.updateSubjectPart(subjectParts, 'topic');

    return (subjectParts.join(' | ') || '');
  }

  /**
   * @param  {string[]} subjectParts
   * @param  {string} subjectPartType
   * @returns void
   */
  public updateSubjectPart(subjectParts: string[], subjectPartType: string): void {
    const objectLevels: string[] = ['gamePlatformTopicData', subjectPartType, 'name'];
    const subjectPart: any = this.flatCheckObjectService.flatCheckObject(this.restData, objectLevels);
    if (subjectPart) subjectParts.push(subjectPart);
  }

  /**
   * @param  {string} fieldCode
   * @returns any
   */
  public getField(fieldCode: string): any {
    return this.restData['fields'].filter(field => (field['code'] === fieldCode))[0];
  }

  /**
   * @param  {string} formControlName
   * @returns boolean
   */
  public isInvalid(formControlName: string): boolean {
    const formControl: any = this.emailForm.get(formControlName);
    return ((this.formData['isEmailFormSubmitted'] || formControl.dirty) && formControl.invalid);
  }

  /**
   * @returns void
   */
  public send(): void {
    this.formData['isEmailFormSubmitted'] = true;
    // Intentional `console.log()` for verifying the contact and email details.
    console.log('Email form values: ', this.emailForm.value);

    // Resetting the form if the values entered are valid.
    if (this.emailForm.valid) {
      this.formData['emailSent'] = true;
      this.formData['isEmailFormSubmitted'] = false;
      this.emailForm.reset();
      this.emailForm.updateValueAndValidity();
    }
  }

}
