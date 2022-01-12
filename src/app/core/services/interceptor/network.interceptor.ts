import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingService } from "../../../shared/service/loading.service";
import { finalize } from "rxjs/operators";

/**
 * this class clean null or undefined params and body of a request
 */
@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private _loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loadingService.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(
        finalize(() => this._loadingService.setLoading(false, request.url))
      );
  }
}
