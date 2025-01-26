import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  isPaused = false;

  skills = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node' },
    { name: 'React', level: 75, icon: 'fab fa-react' },
    { name: 'Python', level: 70, icon: 'fab fa-python' },
    { name: 'SQL', level: 85, icon: 'fas fa-database' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-leaf' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker' },
    { name: 'AWS', level: 65, icon: 'fab fa-aws' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}