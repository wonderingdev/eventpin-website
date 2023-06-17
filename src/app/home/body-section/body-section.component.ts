import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'body-section',
  templateUrl: './body-section.component.html',
  styleUrls: ['./body-section.component.scss'],
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
export class BodySectionComponent {}
