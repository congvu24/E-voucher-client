import { Pipe, PipeTransform } from "@angular/core";

// this pipe only uppercase first letter in a string
// ex: my string -> My string
@Pipe({
  name: "titleCase",
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    const first = value.substring(0, 1).toUpperCase();
    return first + value.substring(1);
  }
}
