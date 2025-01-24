import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  isAdmin: boolean = false;

  constructor(private cookieService: CookieService, private route: Router) {

  }

  switchRole() {
    this.isAdmin = !this.isAdmin;
    const userRole = this.isAdmin ? 'admin' : 'user';

    this.cookieService.set('userRole', userRole, 1);
  }

  navigate(route: string) {
    this.route.navigate([route])
  }
}
