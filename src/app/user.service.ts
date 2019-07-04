import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    loginWithEmail = false;
    uid = this.afAuth.authState.pipe(
        map(authState => {
        if (!authState) {
            return null;
        } else {
            return authState.uid;
        }
    }),
        );
    isAdmin: Observable<boolean> = this.uid.pipe(
        switchMap(uid => {
            if (!uid) {
                return observableOf(false);
            } else {
                return this.db.object<boolean>('/admin/' + uid).valueChanges();
            }
        })
    );

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase ) { }

  // buttons
    login (type) {
        switch (type) {
            case 'google':
                this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
                break;

            case 'facebook':
                this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
                break;

            case 'twitter':
                this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
                break;

            default:
                // this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
                this.loginWithEmail = !this.loginWithEmail;
                console.log(this.loginWithEmail);
                break;
        }
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    submitEmailAddress() {
        console.log('submit email address');
    }
}
