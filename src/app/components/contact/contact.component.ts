import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY");
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitStatus = 'sending';
      
      emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: this.contactForm.value.name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        }
      ).then(
        () => {
          this.submitStatus = 'success';
          this.contactForm.reset();
          setTimeout(() => this.submitStatus = 'idle', 3000);
        },
        () => {
          this.submitStatus = 'error';
          setTimeout(() => this.submitStatus = 'idle', 3000);
        }
      );
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}