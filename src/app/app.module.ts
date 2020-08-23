import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDAo2LQvMuqZzaLHD2AdEsOtvRmxh_YGrQ",
  authDomain: "tracker-4fa62.firebaseapp.com",
  databaseURL: "https://tracker-4fa62.firebaseio.com",
  projectId: "tracker-4fa62",
  storageBucket: "tracker-4fa62.appspot.com",
  messagingSenderId: "720387898409"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATQg58AFITG8yPzUwl6dPVypU4NoLug6M'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
