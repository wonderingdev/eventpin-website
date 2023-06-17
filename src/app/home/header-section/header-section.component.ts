import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
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
export class HeaderSectionComponent implements AfterViewInit {
  @ViewChild('background') animationContainerRef!: ElementRef;
  availableHeight: number = 0;
  availableWidth: number = 0;

  emojis: string[] = [
    '🎉',
    '🎈',
    '🎊',
    '🥳',
    '🎵',
    '🎁',
    '🎺',
    '🎆',
    '🎮',
    '🎥',
    '🎄',
    '🎂',
    '🎃',
    '🍕',
    '🍔',
    '🍟',
    '🍦',
    '🍿',
    '🍪',
    '🍹',
    '🌞',
    '⛅',
    '🌈',
    '🌺',
    '🌸',
    '🌼',
    '🌻',
    '🍀',
    '🌷',
    '🌴',
    '⚽',
    '🏀',
    '🏈',
    '⚾',
    '🎾',
    '🏓',
    '🏐',
    '🏒',
    '🥊',
    '🏋️‍♂️',
  ];

  emojiStates: { state: string; top: number; left: number }[] = [];

  constructor() {
    this.initializeEmojis();
  }
  ngAfterViewInit(): void {
    const animationContainer = this.animationContainerRef.nativeElement;
    this.availableHeight = animationContainer.offsetHeight;
    this.availableWidth = animationContainer.offsetWidth;

    console.log('height', this.availableHeight);
    console.log('width', this.availableWidth);
  }

  initializeEmojis() {
    for (let i = 0; i < this.emojis.length; i++) {
      this.emojiStates.push({
        state: 'visible',
        top: this.getRandomPosition(0, this.availableHeight),
        left: this.getRandomPosition(0, this.availableWidth),
      });
    }
    setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.emojiStates.length);
      this.emojiStates[randomIndex].state = 'hidden';
      setTimeout(() => {
        this.emojiStates[randomIndex].state = 'visible';
        this.emojiStates[randomIndex].top = this.getRandomPosition(
          0,
          this.availableHeight
        );
        this.emojiStates[randomIndex].left = this.getRandomPosition(
          0,
          this.availableWidth
        );
      }, 600);
    }, 500);
  }

  private getRandomPosition(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
