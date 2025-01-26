import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/components/home/home.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div [class.dark]="isDarkMode" class="scroll-smooth">
      <app-navbar (themeToggle)="toggleTheme()"></app-navbar>
      <app-home id="home"></app-home>
      <app-about id="about"></app-about>
      <app-skills id="skills"></app-skills>
      <app-projects id="projects"></app-projects>
      <app-contact id="contact"></app-contact>
    </div>
  `
})
export class App {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }
}

bootstrapApplication(App, {
  providers: []
});