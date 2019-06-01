import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeId from '@angular/common/locales/id';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { registerLocaleData } from '@angular/common';
import { UiService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { reducers } from './app.reducer';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [AppComponent, WelcomeComponent, NavigationComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    AngularFirestoreModule,
    AuthModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    AuthService,
    TrainingService,
    UiService,
    { provide: LOCALE_ID, useValue: 'id' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
