import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appServiceForm]",
})
export class ServiceFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
