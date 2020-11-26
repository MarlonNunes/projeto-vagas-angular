import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from './template/template.module';
import {VagasService} from './vagas.service';
import { BodyComponent } from './body/body.component';
import { VagasModule } from './vagas/vagas.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    VagasModule
  ],
  providers: [
    VagasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
