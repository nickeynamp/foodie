import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { Browse } from '../pages/browse/browse';
import { Restaurant } from '../pages/restaurant/restaurant';
import { User } from '../pages/user/user';
import { Inbox } from '../pages/inbox/inbox';
import { Message } from '../pages/message/message';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform) {

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Browse', component: Browse },
      { title: 'Restaurant', component: Restaurant },
      { title: 'User', component: User },
      { title: 'Inbox', component: Inbox },
      { title: 'Message', component: Message },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
