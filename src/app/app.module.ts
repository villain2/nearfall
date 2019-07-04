
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule, MatCheckboxModule, MatInputModule,
    AngularFireModule.initializeApp(
      {
        apiKey: 'AIzaSyAnN0F6ez7gydK6k1LFw-vouqhmtuZHoRw',
        authDomain: 'nearfall-user-login.firebaseapp.com',
        databaseURL: 'https://nearfall-user-login.firebaseio.com',
        projectId: 'nearfall-user-login',
        storageBucket: '',
        messagingSenderId: '847339143206',
        appId: '1:847339143206:web:7300dd3ae742c84c'
      }),
      AngularFireAuthModule,
      AngularFireDatabaseModule
  ],
    exports: [MatInputModule, MatCheckboxModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
