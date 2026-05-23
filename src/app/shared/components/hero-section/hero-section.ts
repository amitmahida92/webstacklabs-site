import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon';
import { fadeUp } from '../../animations/fade-up.animation';

@Component({
  selector: 'wsl-hero-section',
  imports: [RouterLink, IconComponent],
  templateUrl: './hero-section.html',
  animations: [fadeUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {}
