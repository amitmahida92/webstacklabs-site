import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../../shared/components/icon/icon';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'wsl-contact-page',
  imports: [IconComponent, SectionHeaderComponent],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  protected readonly projectTypes = [
    'SaaS platform',
    'AI-assisted workflow',
    'Web/mobile application',
    'Frontend architecture',
    'Cloud & DevOps',
    'Performance optimization'
  ] as const;
}
