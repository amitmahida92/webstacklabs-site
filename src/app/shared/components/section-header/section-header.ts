import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wsl-section-header',
  templateUrl: './section-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeaderComponent {
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input() description = '';
  @Input() align: 'left' | 'center' = 'left';
}
