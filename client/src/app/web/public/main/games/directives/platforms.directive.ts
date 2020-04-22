import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eaPlatforms]'
})
export class PlatformsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
