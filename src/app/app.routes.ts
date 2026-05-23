import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about-page';
import { ContactPageComponent } from './pages/contact/contact-page';
import { HomePageComponent } from './pages/home/home-page';
import { PortfolioPageComponent } from './pages/portfolio/portfolio-page';
import { ServicesPageComponent } from './pages/services/services-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Webstacklabs | Scalable Software Engineering' },
  { path: 'services', component: ServicesPageComponent, title: 'Services | Webstacklabs' },
  { path: 'about', component: AboutPageComponent, title: 'About | Webstacklabs' },
  { path: 'portfolio', component: PortfolioPageComponent, title: 'Case Studies | Webstacklabs' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact | Webstacklabs' },
  { path: '**', redirectTo: '' }
];
