
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrendingComponent } from './components/trending/trending.component';
import { EventsComponent } from './components/events/events.component';
import { MatchComponent } from './components/match/match.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignupService } from './services/signup.service';
import { MatchesService } from './services/matches.service';
import { StarterComponent } from './components/starter/starter.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { MainMenuComponent } from './components/navigation/main-menu/main-menu.component';

const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'trending', component: TrendingComponent },
    {path: 'starter', component: StarterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    TrendingComponent,
    EventsComponent,
    MatchComponent,
    NotificationsComponent,
    StarterComponent,
    ToolbarComponent,
    MainMenuComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
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
        AngularFireDatabaseModule, MatToolbarModule, MatCardModule
    ],
    exports: [MatInputModule, MatCheckboxModule, MatButtonModule, RouterModule],
  providers: [SignupService, MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
