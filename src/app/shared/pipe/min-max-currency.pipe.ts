import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "minMaxCurrency",
})
export class MinMaxCurrencyPipe implements PipeTransform {
  transform(min: number, max: number): unknown {
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }
}
