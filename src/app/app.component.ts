import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    console.log('here');
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/instagram-icon.svg`
      )
    );
  }

  onSocialButtonClick(type: string) {
    if (type === 'facebook') {
      window.open('https://www.facebook.com/profile.php?id=100095048910094');
    } else if (type === 'instagram') {
      window.open('https://www.instagram.com/the.real.eventpin/');
    }
  }
}
