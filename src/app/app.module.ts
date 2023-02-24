import { MaterialUiModule } from './ui/material-ui/material-ui.module';
import { LoginGuardService } from './../infrastructure/authentication/login-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { MainReportComponent } from './pages/main-report/main-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportDetailComponent } from './pages/dialogs/report-detail/report-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainReportComponent,
    ReportDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    ReactiveFormsModule
  ],
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
