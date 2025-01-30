import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})
export class UserLandingComponent {
  isAdmin: boolean = false;

  constructor(private cookieService: CookieService, private route: Router) {

  }



  navigate(route: string) {
    this.route.navigate([''])
  }
}
