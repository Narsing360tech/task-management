import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day-23',
  templateUrl: './day-23.component.html',
  styleUrls: ['./day-23.component.scss'],
  animations: [
    trigger('menuState', [
      state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed => open', [
        animate('500ms ease-in-out', keyframes([
          style({ height: '0px', opacity: 0, offset: 0 }),
          style({ height: '50px', opacity: 0.5, offset: 0.5 }),
          style({ height: '*', opacity: 1, offset: 1 })
        ]))
      ]),
      transition('open => closed', [
        animate('400ms ease-in-out', keyframes([
          style({ height: '*', opacity: 1, offset: 0 }),
          style({ height: '50px', opacity: 0.5, offset: 0.5 }),
          style({ height: '0px', opacity: 0, offset: 1 })
        ]))
      ])
    ]),
    trigger('hoverEffect', [
      state('inactive', style({ transform: 'scale(1)', backgroundColor: '#ffffff' })),
      state('active', style({ transform: 'scale(1.05)', backgroundColor: '#f0f0f0' })),
      transition('inactive <=> active', animate('300ms ease-in-out'))
    ])
  ]
})
export class Day23Component {
  menuOpen = false;
  hoverState: { [key: string]: 'active' | 'inactive' } = {};
  menuItems = ['Home', 'Products', 'About', 'Contact'];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  setHoverState(item: string, state: 'active' | 'inactive') {
    this.hoverState[item] = state;
  }

  onMenuOpened() {
    console.log('Menu fully opened');
  }

  onMenuClosed() {
    console.log('Menu fully closed');
  }

}
