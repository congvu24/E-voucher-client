import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "minMaxCurrency",
})
export class MinMaxCurrencyPipe implements PipeTransform {
  transform(min?: number, max?: number): unknown {
    if (min && max)
      return `$${min.toLocaleString()} - $${max.toLocaleString()}`;

    return "Empty field";
  }
}
