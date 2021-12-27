import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-s-status-tag",
  templateUrl: "./s-status-tag.component.html",
  styleUrls: ["./s-status-tag.component.scss"],
})
export class SStatusTagComponent implements OnInit {
  @Input() isShow: boolean;
  status = "in use";
  color = "processing";
  constructor() {}

  ngOnInit(): void {
    if (this.isShow === false || this.isShow === null) {
      this.status = "not use";
      this.color = "default";
    }
  }
}
