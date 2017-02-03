import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';
import { BrowsePage } from '../browse/browse';
import { RestaurantPage } from '../restaurant/restaurant';
import { InboxPage } from '../inbox/inbox';
import { UserPage } from '../user/user';
import { MessagePage } from '../message/message';

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

  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }


}