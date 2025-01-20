import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormdataserviceService } from '../formdataservice.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  formData: any;
  isDarkMode = false;

  constructor(private formService: FormdataserviceService, private renderer: Renderer2, private el: ElementRef) {
  }
  ngOnInit() {
    this.formService.formDataSubject.subscribe((data) => {
      this.formData = data;
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.renderer.addClass(this.el.nativeElement, 'dark-theme');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dark-theme');
    }
  }

}
