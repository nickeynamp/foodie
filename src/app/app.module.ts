import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrowsePage } from '../pages/browse/browse';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { UserPage } from '../pages/user/user';
import { InboxPage } from '../pages/inbox/inbox';
import { MessagePage } from '../pages/message/message';
import { LikePage } from '../pages/like/like';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BrowsePage,
    RestaurantPage,
    UserPage,
    InboxPage,
    MessagePage,
    LikePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BrowsePage,
    RestaurantPage,
    UserPage,
    InboxPage,
    MessagePage,
    LikePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
