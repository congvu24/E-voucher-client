import { Component, OnInit } from "@angular/core";
import { merge, Observable, Observer, timer } from "rxjs";
import { delay, finalize, map, scan } from "rxjs/operators";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { NzMessageService } from "ng-zorro-antd/message";
@Component({
  selector: "app-create-service",
  templateUrl: "./create-service.component.html",
  styleUrls: ["./create-service.component.scss"],
})
export class CreateServiceComponent implements OnInit {
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
      percentage: 0,
    },
    {
      id: 3,
      title: "Done",
      description: "Service is ready!!",
      async: true,
      percentage: 0,
    },
  ];

  constructor() {}

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.loadingAndStep();
  }

  done(): void {
    // this.loadingAndStep();
    // console.log("done");
  }

  loadingAndStep(): void {
    if (this.current < this.steps.length) {
      const step = this.steps[this.current];
      if (step.async) {
        // this.processing = true;
        // mockAsyncStep()

        //   .pipe(
        //     finalize(() => {
        //       step.percentage = 0;
        //       this.processing = false;
        //       this.current += 1;
        //     })
        //   )
        //   .subscribe((p) => {
        //     step.percentage = p;
        //   });
        // alert("call http here");
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
