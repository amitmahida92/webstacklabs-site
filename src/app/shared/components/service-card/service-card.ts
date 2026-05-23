import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon';
import { Service } from '../../data/site-content';

@Component({
  selector: 'wsl-service-card',
  imports: [IconComponent],
  templateUrl: './service-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: Service;
}
