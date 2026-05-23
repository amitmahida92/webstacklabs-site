import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card';
import { staggerFadeUp } from '../../shared/animations/fade-up.animation';
import { services } from '../../shared/data/site-content';

@Component({
  selector: 'wsl-services-page',
  imports: [CtaSectionComponent, SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './services-page.html',
  animations: [staggerFadeUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {
  protected readonly services = services;
}
