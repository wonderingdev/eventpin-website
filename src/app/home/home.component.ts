import { Component } from '@angular/core';
declare let gtag: Function;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  onGooglePlayClick() {
    gtag('event', 'google_play_click', {
      event_category: 'button_click',
      event_label: 'Get it on Google Play Click',
      value: 'google_play',
    });
  }

  onAppleAppStoreClick() {
    gtag('event', 'apple_app_store_click', {
      event_category: 'button_click',
      event_label: 'Download on the App Store Click',
      value: 'apple_app_store',
    });
  }
}
