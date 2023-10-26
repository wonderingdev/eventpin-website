import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
declare const fbq: any;

@Component({
  selector: 'download-it-section',
  templateUrl: './download-it-section.component.html',
  styleUrls: ['./download-it-section.component.scss'],
  animations: [
    trigger('emojiAnimation', [
      state(
        'visible',
        style({ opacity: 0.8, transform: 'translate(-50%, -50%)' })
      ),
      state(
        'hidden',
        style({ opacity: 0, transform: 'translate(-50%, -50%)' })
      ),
      transition('hidden <=> visible', animate('900ms ease-in-out')),
    ]),
  ],
})
export class DownloadItSectionComponent {
  slides: any[] = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    lazyLoad: 'progressive',
    autoplaySpeed: 2000,
    mobileFirst: true,
    arrows: true,
  };

  constructor() {
    for (let i = 1; i <= 8; ++i) {
      this.slides = [
        ...this.slides,
        {
          img: `assets/screenshots/6.5in-Screen-${i}.png`,
        },
      ];
    }
    console.log(this.slides);
  }

  onAppleStoreClick() {
    (window as any).fbq('trackCustom', 'AppleStoreClick');
  }

  onGooglePlayStoreClick() {
    (window as any).fbq('trackCustom', 'GooglePlayStoreClick');
  }
}
