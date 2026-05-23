import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon';
import { navItems } from '../../data/site-content';

@Component({
  selector: 'wsl-header',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  protected readonly navItems = navItems;
  protected isMenuOpen = false;

  protected toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu(): void {
    this.isMenuOpen = false;
  }
}
