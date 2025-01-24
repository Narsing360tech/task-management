import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-componant',
  templateUrl: './admin-componant.component.html',
  styleUrls: ['./admin-componant.component.scss']
})
export class AdminComponantComponent {
  constructor(private route: Router) {

  }
  navigate(string: any) {
    this.route.navigate([''])
  }
}
