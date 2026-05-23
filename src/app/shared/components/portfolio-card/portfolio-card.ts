import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { CaseStudy } from '../../data/site-content';

@Component({
  selector: 'wsl-portfolio-card',
  imports: [IconComponent],
  templateUrl: './portfolio-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioCardComponent {
  @Input({ required: true }) caseStudy!: CaseStudy;
  @Input() index = 0;
}
