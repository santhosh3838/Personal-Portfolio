import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University Name',
      year: '2020-2022',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'University Name',
      year: '2016-2020',
      description: 'Major in Software Engineering'
    }
  ];

  experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      year: '2022-Present',
      description: 'Leading development of enterprise applications'
    },
    {
      title: 'Software Engineer',
      company: 'Startup',
      year: '2020-2022',
      description: 'Full-stack development using modern technologies'
    }
  ];
}