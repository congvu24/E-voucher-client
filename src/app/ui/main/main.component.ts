import { Component, OnInit } from "@angular/core";
import { StorageService } from "../../core/services";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  role: string;

  constructor(private _storage: StorageService) {
    // this.role = this._storage.getToken("role");
    this.role = "dealer";
  }

  ngOnInit(): void {}
}
