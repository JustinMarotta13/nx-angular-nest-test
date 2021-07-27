import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@justin-marotta/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatatableComponent } from './datatable/datatable.component';
import { UsersComponent } from './users/users.component';
import { UsertableService } from '../services/usertable.service';

@NgModule({
  declarations: [AppComponent, ButtonsComponent, DatatableComponent, UsersComponent],
  imports: [BrowserModule, HttpClientModule, MaterialModule, FontAwesomeModule],
  providers: [UsertableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
