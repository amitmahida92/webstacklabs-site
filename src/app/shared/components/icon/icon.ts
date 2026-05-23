import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  LucideArrowRight,
  LucideArrowUpRight,
  LucideBot,
  LucideBoxes,
  LucideCheckCircle2,
  LucideCloud,
  LucideCompass,
  LucideCpu,
  LucideDatabase,
  LucideDynamicIcon,
  type LucideIconInput,
  LucideGauge,
  LucideLayers,
  LucideLineChart,
  LucideMail,
  LucideMapPin,
  LucideMenu,
  LucidePalette,
  LucidePlay,
  LucideSend,
  LucideShieldCheck,
  LucideSmartphone,
  LucideTarget,
  LucideWorkflow,
  LucideX,
  LucideZap
} from '@lucide/angular';

const icons: Record<string, LucideIconInput> = {
  'arrow-right': LucideArrowRight,
  'arrow-up-right': LucideArrowUpRight,
  bot: LucideBot,
  boxes: LucideBoxes,
  'check-circle-2': LucideCheckCircle2,
  cloud: LucideCloud,
  compass: LucideCompass,
  cpu: LucideCpu,
  database: LucideDatabase,
  gauge: LucideGauge,
  layers: LucideLayers,
  'line-chart': LucideLineChart,
  mail: LucideMail,
  'map-pin': LucideMapPin,
  menu: LucideMenu,
  palette: LucidePalette,
  play: LucidePlay,
  send: LucideSend,
  'shield-check': LucideShieldCheck,
  smartphone: LucideSmartphone,
  target: LucideTarget,
  workflow: LucideWorkflow,
  x: LucideX,
  zap: LucideZap
};

@Component({
  selector: 'wsl-icon',
  imports: [LucideDynamicIcon],
  template: '<svg [lucideIcon]="icon" class="h-full w-full" aria-hidden="true"></svg>',
  host: {
    class: 'inline-flex shrink-0 items-center justify-center align-middle'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input({ required: true }) name!: string;

  protected get icon(): LucideIconInput {
    return icons[this.name] ?? LucideArrowRight;
  }
}
