import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() themeChange = new EventEmitter<string>();

  themes = [
    { name: 'light', class: 'bg-white border-2 border-gray-300' },
    { name: 'dark', class: 'bg-gray-900' },
    { name: 'blue', class: 'bg-blue-600' },
    { name: 'green', class: 'bg-green-600' },
    { name: 'purple', class: 'bg-purple-600' }
  ];

  setTheme(theme: string) {
    this.themeChange.emit(theme);
  }
}