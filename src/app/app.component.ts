import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { BrowsePage } from '../pages/browse/browse';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { UserPage } from '../pages/user/user';
import { InboxPage } from '../pages/inbox/inbox';
import { MessagePage } from '../pages/message/message';
import { LikePage } from '../pages/like/like';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.startApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Browse', component: BrowsePage },
      { title: 'Restaurant', component: RestaurantPage },
      { title: 'User', component: UserPage },
      { title: 'Inbox', component: InboxPage },
      { title: 'Message', component: MessagePage },
      { title: 'Like', component: LikePage }
    ];
  }
    startApp(){
      this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      });  
    }

    display(page){
      //Set a page on top of the stack to display
      this.nav.setRoot(page.component);
    }
}
