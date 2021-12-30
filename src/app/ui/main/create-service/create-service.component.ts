import { Component, OnInit, ViewChild } from "@angular/core";
import { merge, Observable, Observer, timer } from "rxjs";
import { catchError, delay, finalize, map, scan } from "rxjs/operators";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { NzMessageService } from "ng-zorro-antd/message";
import { FormBuilder } from "@angular/forms";
import { Package } from "../../../core/interface/package";
import { CreatePackageService } from "../../../service/package/create-package.service";
import { StepOneComponent } from "./step-one/step-one.component";
import { UiService } from "../../../core/services";
@Component({
  selector: "app-create-service",
  templateUrl: "./create-service.component.html",
  styleUrls: ["./create-service.component.scss"],
  providers: [CreatePackageService],
})
export class CreateServiceComponent implements OnInit {
  @ViewChild(StepOneComponent) stepOneRef: StepOneComponent;
  current = 0;
  processing = false;
  steps: Step[] = [
    {
      id: 1,
      title: "Create",
      description: "Build a service",
      async: false,
      percentage: null,
    },
    {
      id: 2,
      title: "Verify",
      description: "Review information",
      async: true,
      percentage: null,
    },
    {
      id: 3,
      title: "Done",
      description: "Service is ready!!",
      async: false,
      percentage: null,
    },
  ];

  stepThreeStatus = "error";

  constructor(
    private _packageService: CreatePackageService,
    private _ui: UiService
  ) {}
  createPackage() {
    this.loadingAndStep();
  }
  continue() {
    try {
      this.stepOneRef.submitForm();
      this.loadingAndStep();
    } catch (error: any) {
      this._ui.showError(error.message);
    }
  }
  pre(): void {
    this.current -= 1;
  }

  loadingAndStep(): void {
    if (this.current < this.steps.length) {
      const step = this.steps[this.current];
      if (step.async) {
        this.processing = true;
        this._packageService.create().subscribe((res) => {
          step.percentage = 1;
          this.stepThreeStatus = "success";
        });

        this.current += 1;
      } else {
        this.current += 1;
      }
    }
  }
  ngOnInit(): void {}
}

interface SyncStep {
  id: number;
  title: string;
  description: string;
  async: false;
  percentage: null;
}

interface AsyncStep {
  id: number;
  title: string;
  description: string;
  async: true;
  percentage: number;
}

type Step = SyncStep | AsyncStep;
