import {
  AfterContentChecked,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from "@angular/core";
import { VoucherType } from "../../../core/interface/voucher";

@Directive({
  selector: "[appHighlightColor]",
})
export class HighlightColorDirective implements AfterContentChecked {
  @Input() voucherType = VoucherType.help;
  constructor(private _el: ElementRef) {}
  ngAfterContentChecked(): void {
    switch (this.voucherType) {
      case VoucherType.urgent:
        this.changeColor("#f5222d");
        break;
      case VoucherType.support:
        this.changeColor("#fadb14");
        break;
      default:
        this.changeColor("#52c41a");
        break;
    }
  }

  private changeColor(color: string) {
    this._el.nativeElement.style.color = color;
  }
}
