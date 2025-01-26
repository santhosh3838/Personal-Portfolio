import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    'https://source.unsplash.com/random/1920x1080?technology',
    'https://source.unsplash.com/random/1920x1080?coding',
    'https://source.unsplash.com/random/1920x1080?developer'
  ];
  currentImage = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }, 5000);
  }
}