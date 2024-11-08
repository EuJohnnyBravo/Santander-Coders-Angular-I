import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const videoId = 'dQw4w9WgXcQ';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }
}
