import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CtaSectionComponent } from '../../shared/components/cta-section/cta-section';
import { PortfolioCardComponent } from '../../shared/components/portfolio-card/portfolio-card';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { staggerFadeUp } from '../../shared/animations/fade-up.animation';
import { caseStudies } from '../../shared/data/site-content';

@Component({
  selector: 'wsl-portfolio-page',
  imports: [CtaSectionComponent, PortfolioCardComponent, SectionHeaderComponent],
  templateUrl: './portfolio-page.html',
  animations: [staggerFadeUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioPageComponent {
  protected readonly caseStudies = caseStudies;
}
