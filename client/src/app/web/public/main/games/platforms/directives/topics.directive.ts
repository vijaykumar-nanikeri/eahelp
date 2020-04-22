import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eaTopics]'
})
export class TopicsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
