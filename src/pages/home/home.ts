import { Component } from '@angular/core';

import { App,NavController } from 'ionic-angular';
import { BrowsePage } from '../browse/browse';
import { RestaurantPage } from '../restaurant/restaurant';
import { InboxPage } from '../inbox/inbox';
import { UserPage } from '../user/user';
import { MessagePage } from '../message/message';
import { LikePage } from '../like/like';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  browsePage = BrowsePage;
  restaurantPage = RestaurantPage;
  inboxPage = InboxPage;
  userPage = UserPage;
  messagePage = MessagePage;
  likePage = LikePage;

  constructor(public navCtrl:NavController){

  }


}
