import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AemployeeProfileComponent } from './aemployee-profile/aemployee-profile.component';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { EmployeeTableComponent } from './aemployee-profile/employee-table/employee-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';  // Import MessageService
import { MessageModule } from 'primeng/message';  // Import MessageModule


@NgModule({
  declarations: [
    AppComponent,
    AemployeeProfileComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RatingModule,
    InputTextModule ,
    InputTextareaModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule,
    CardModule,
    ToastModule,
    MessageModule

  ],
  providers: [MessageService],
    bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
