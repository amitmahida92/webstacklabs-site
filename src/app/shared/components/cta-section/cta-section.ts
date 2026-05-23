import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'wsl-cta-section',
  imports: [RouterLink, IconComponent],
  templateUrl: './cta-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaSectionComponent {
  @Input() eyebrow = 'Ready to build?';
  @Input() title = 'Turn your product idea into a scalable digital system.';
  @Input() description = 'Bring Webstacklabs in as your engineering partner for architecture, execution, automation, and launch-ready product development.';
}
