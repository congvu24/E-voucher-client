import { Observable } from "rxjs";

export abstract class IAuthService {
  abstract login(email: string, password: string);
  abstract logout(): void;
  abstract isLoggedIn(): boolean;
  abstract getRole(): string;
  abstract saveCredential(
    user,
    token
  ): Observable<{ success: boolean; role: string }>;
}
