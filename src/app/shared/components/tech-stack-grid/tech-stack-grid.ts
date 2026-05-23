import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wsl-tech-stack-grid',
  templateUrl: './tech-stack-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechStackGridComponent {
  @Input({ required: true }) technologies!: readonly string[];
}
