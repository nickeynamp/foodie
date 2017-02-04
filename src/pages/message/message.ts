import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InboxPage } from '../inbox/inbox';
import { UserPage } from '../user/user';
import { LikePage } from '../like/like';
/*
  Generated class for the Message page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  inboxPage = InboxPage;
  userPage = UserPage;
  likePage = LikePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
