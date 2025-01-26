import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with Angular and Node.js',
      image: 'https://source.unsplash.com/random/800x600?coding',
      github: 'https://github.com',
      demo: 'https://example.com',
      youtube: 'https://youtube.com'
    },
    {
      title: 'Project 2',
      description: 'Mobile-first responsive website with modern animations',
      image: 'https://source.unsplash.com/random/800x600?website',
      github: 'https://github.com',
      demo: 'https://example.com',
      linkedin: 'https://linkedin.com'
    },
    // Add more projects as needed
  ];
}