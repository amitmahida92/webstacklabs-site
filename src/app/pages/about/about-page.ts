import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section';
import { IconComponent } from '../../shared/components/icon/icon';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { staggerFadeUp } from '../../shared/animations/fade-up.animation';

@Component({
  selector: 'wsl-about-page',
  imports: [IconComponent, CtaSectionComponent, SectionHeaderComponent],
  templateUrl: './about-page.html',
  animations: [staggerFadeUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {
  protected readonly values = [
    { icon: 'cpu', title: 'Engineering-first', text: 'We start with architecture, constraints, and operational reality before decorating the surface.' },
    { icon: 'target', title: 'Product-minded', text: 'Every technical decision is tied to user experience, speed of learning, and business outcome.' },
    { icon: 'line-chart', title: 'Performance-driven', text: 'We measure interface speed, API behavior, and scalability early enough to shape the build.' },
    { icon: 'compass', title: 'Long-term partner', text: 'We build foundations that future teams can understand, extend, and trust.' }
  ] as const;
}
