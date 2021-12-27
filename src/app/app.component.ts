import { Component, OnInit } from "@angular/core";
import { ElectronService } from "./core/services";
import { APP_CONFIG } from "../environments/environment";
import { Router } from "@angular/router";
import { AuthService } from "./service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private electronService: ElectronService,
    private _router: Router,
    private _auth: AuthService
  ) {
    if (electronService.isElectron) {
      console.log(process.env);
      console.log("Run in electron");
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
    } else {
      console.log("Run in browser");
    }
  }
  ngOnInit(): void {
    // redirect user if they're logged in
    // const userRole = this._auth.getRole();
    // this._router.navigate([userRole.toLowerCase()]);
  }
}
