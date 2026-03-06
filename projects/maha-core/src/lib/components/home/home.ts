import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private fb = inject(FormBuilder);
  private sanitizer = inject(DomSanitizer);

  contactForm: FormGroup;
  safeMapUrl: SafeResourceUrl;

  constructor() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    // Provide a generic Google Maps iframe URL and bypass security trust
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1709778234674!5m2!1sen!2sus';
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted successfully', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
