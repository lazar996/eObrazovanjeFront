import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { DokumentaService } from './services/dokumenta.service'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DokumentaComponent } from './dokumenta/dokumenta.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import { LoginDialog} from './dialogs/login.dialog';
import { PasswordDialog} from './dialogs/password.dialog';
import { TokenInterceptorService } from './security/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    DokumentaComponent,
    KorisniciComponent,
    PredmetiComponent,
    UceniciComponent,
    NastavniciComponent,
    LoginDialog,
    PasswordDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[LoginDialog
    ,PasswordDialog],
  providers:[DokumentaService,HttpClient,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
