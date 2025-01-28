import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-un-authorized',
  templateUrl: './un-authorized.component.html',
  styleUrls: ['./un-authorized.component.scss']
})
export class UnAuthorizedComponent {
  constructor(private router: Router) {

  }
  goHome() {
    this.router.navigate(['/']);
  }
}
