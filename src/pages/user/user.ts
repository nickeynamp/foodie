import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InboxPage } from '../inbox/inbox';
import { LikePage } from '../like/like';
/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  inboxPage = InboxPage;
  userPage = UserPage;
  likePage = LikePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
