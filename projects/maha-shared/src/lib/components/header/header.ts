import { Component } from '@angular/core';

@Component({
  selector: 'lib-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  logout() {
    console.log('Logging out...');
  }
}
