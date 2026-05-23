import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon';
import { navItems, techStack } from '../../data/site-content';

@Component({
  selector: 'wsl-footer',
  imports: [RouterLink, IconComponent],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  protected readonly navItems = navItems;
  protected readonly techStack = techStack.slice(0, 8);
}
