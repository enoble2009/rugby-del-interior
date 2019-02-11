import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlayerComponent } from './pages/player/player.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentificationPipe } from './pipes/identification.pipe';
import { PlayerinfoComponent } from './pages/playerinfo/playerinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PlayerComponent,
    MatchesComponent,
    IdentificationPipe,
    PlayerinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AppModule { }
