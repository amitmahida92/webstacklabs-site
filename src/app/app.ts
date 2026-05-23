import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer';
import { HeaderComponent } from './shared/components/header/header';

@Component({
  selector: 'wsl-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <wsl-header />
    <main>
      <router-outlet />
    </main>
    <wsl-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
