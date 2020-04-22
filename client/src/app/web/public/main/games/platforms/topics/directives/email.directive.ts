import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eaEmail]'
})
export class EmailDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
