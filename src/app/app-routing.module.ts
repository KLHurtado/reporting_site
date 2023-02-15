import { LoginGuardService } from './../infrastructure/authentication/login-guard.service';
import { LoginComponent } from './authentication/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReportComponent } from './pages/main-report/main-report.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'report',
    component: MainReportComponent,
    canActivate: [LoginGuardService],
  },
  { path: '**', redirectTo: '', canActivate: [LoginGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
