import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
declare let gtag: Function;
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('downloadSection', { read: ElementRef })
  downloadSection: ElementRef;

  constructor(private router: Router, public platform: Platform) {}

  ngAfterViewInit(): void {
    const url = this.router.url;

    if (url.endsWith('#download')) {
      setTimeout(
        () =>
          this.downloadSection.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          }),
        100
      );
    }
  }

  ngOnInit(): void {
    const url = this.router.url;
    if (this.platform.ANDROID || this.platform.IOS) {
      let matches = url.match('.*/event/.*');
      let anyMatch = matches && matches!.length > 0;
      matches = url.match('.*/user/.*/profile$');
      anyMatch ||= matches && matches!.length > 0;

      if (anyMatch) {
        if (this.platform.ANDROID) {
          window.location.href =
            'https://play.google.com/store/apps/details?id=net.eventpin';
        } else {
          window.location.href =
            'https://apps.apple.com/de/app/eventpin/id6449166469?l=en-GB';
        }
      }
    }
  }

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
