import {
  AfterContentChecked,
  Directive,
  ElementRef,
  Input,
} from "@angular/core";
import { VoucherType } from "../../../core/interface/voucher";

@Directive({
  selector: "[appBoderColorHighlight]",
})
export class BoderColorHighlightDirective implements AfterContentChecked {
  @Input() voucherType = VoucherType.help;

  constructor(private _el: ElementRef) {}
  ngAfterContentChecked(): void {
    switch (this.voucherType) {
      case VoucherType.urgent:
        this.changeBoderColor("#FCACAF");
        break;
      case VoucherType.support:
        this.changeBoderColor("#FCF1AC");
        break;
      default:
        this.changeBoderColor("#C6FDAA");
        break;
    }
  }
  private changeBoderColor(color: string) {
    this._el.nativeElement.style.borderColor = color;
  }
}
