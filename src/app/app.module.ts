import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlyoService } from './alyo.service';

import { AlyoInputComponent } from './alyoinput/alyoinput.component';
import { AlyofontsComponent } from './alyofonts/alyofonts.component';

import { AlyoIconaNomeSitoComponent } from './alyoiconanomesito/alyoiconanomesito.component';

import { AlyoColoriComponent } from './alyocolori/alyocolori.component'

import { CookieService } from 'ngx-cookie-service';

import { AlyofileComponent } from './alyofile/alyofile.component'
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AlyocontenitoreComponent } from './alyocontenitore/alyocontenitore.component';
import { AlyocontenitorelabelComponent } from './alyocontenitorelabel/alyocontenitorelabel.component';
import { AlyosfondoComponent } from './alyosfondo/alyosfondo.component';
import { AlyoiconesitoComponent } from './alyoiconesito/alyoiconesito.component';
import { AlyonomesitoComponent } from './alyonomesito/alyonomesito.component';
import { AlyocontenutiscorrevoliComponent } from './alyocontenutiscorrevoli/alyocontenutiscorrevoli.component';

@NgModule({
  declarations: [
    AppComponent,
    AlyoInputComponent,
    AlyofontsComponent,
    AlyoIconaNomeSitoComponent,
    AlyoColoriComponent,
    AlyofileComponent,
    AlyocontenitoreComponent,
    AlyocontenitorelabelComponent,
    AlyosfondoComponent,
    AlyoiconesitoComponent,
    AlyonomesitoComponent,
    AlyocontenutiscorrevoliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [AlyoService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
