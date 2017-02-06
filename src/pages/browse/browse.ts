import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InboxPage } from '../inbox/inbox';
import { UserPage } from '../user/user';
import { LikePage } from '../like/like';
import { RestaurantPage } from '../restaurant/restaurant';
/*
  Generated class for the Browse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
  inboxPage = InboxPage;
  userPage = UserPage;
  likePage = LikePage;
  restaurantPage = RestaurantPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

}
