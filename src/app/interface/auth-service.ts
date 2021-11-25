import { Observable } from "rxjs";

export abstract class IAuthService {
  abstract login(email: string, password: string): Observable<any>;
  abstract logout(): void;
}
