import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(18px)' }),
    animate('650ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerFadeUp = trigger('staggerFadeUp', [
  transition(':enter', [
    query(
      '[data-animate]',
      [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(80, [
          animate('620ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ],
      { optional: true }
    )
  ])
]);
