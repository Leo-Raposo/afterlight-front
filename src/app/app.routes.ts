import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { CodePageComponent } from './pages/code-page/code-page.component';
import { DashboardLayout } from './pages/dashboard-layout/dashboard-layout.component';
import { TrailsComponent } from './pages/trails/trails.component';
import { RankLayoutComponent } from './pages/rank-layout/rank-layout.component';
import { BadgesLayoutComponent } from './pages/badges-layout/badges-layout.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'signin', component: SigninComponent, data: { animation: 'SigninPage' } },
  { path: 'signup', component: SignupComponent, data: { animation: 'SignupPage' } },
  { path: 'code-page', component: CodePageComponent, data: { animation: 'CodePage' } },
  { path: 'dashboard', component: DashboardLayout, data: { animation: 'DashboardPage' } },
  { path: 'trails', component: TrailsComponent, data: { animation: 'TrailsPage' } },
  { path: 'rank', component: RankLayoutComponent, data: { animation: 'RankPage' } },
  { path: 'badges', component: BadgesLayoutComponent, data: { animation: 'BadgesPage' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

