import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InboxPage } from '../inbox/inbox';
import { UserPage } from '../user/user';

/*
  Generated class for the Like page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-like',
  templateUrl: 'like.html'
})
export class LikePage {
  inboxPage = InboxPage;
  userPage = UserPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikePage');
  }

}
