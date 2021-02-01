import { Injectable, Inject, NgZone } from '@angular/core';
import { LogoutService, SessionService, Countdown, SESSION, LOGOUT } from '@backbase/foundation-ang/web-sdk';

@Injectable()
/**
 * SessionTimeoutService used to call logout and session services for session management.
 */
export class SessionTimeoutService {
  /**
   * SessionTimeoutService constructor
   * @param logoutService Auth factory used to manage logout.
   * @param sessionService Auth factory used to manage session.
   * @param ngZone Service for executing work inside or outside of the Angular zone.
   */
  constructor(
    @Inject(LOGOUT) private readonly logoutService: LogoutService,
    @Inject(SESSION) private readonly sessionService: SessionService,
    private readonly ngZone: NgZone,
  ) {}

  /**
   * Calls the auth logout service to log the user out.
   * @returns a promise from the logout service.
   */
  logout() {
    return this.ngZone.runOutsideAngular(() => {
      return this.logoutService.logout();
    });
  }

  /**
   * Calls the auth session service to register a countdown object for managing session.
   * @param countdown a `Countdown` object that allows a controller to register functions to auth session actions.
   */
  registerCountdown(countdown: Countdown) {
    this.ngZone.runOutsideAngular(() => {
      this.sessionService.registerCountdown(countdown);
    });
  }

  /**
   * Calls the auth session service to refresh the user's session.
   * @returns a promise from the session service.
   */
  refresh() {
    return this.ngZone.runOutsideAngular(() => {
      return this.sessionService.refresh();
    });
  }

  /**
   * Calls the auth logout service to send the user to the login page.
   */
  goToLoginPage() {
    this.logoutService.goToLoginPage();
  }
}
