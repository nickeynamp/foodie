import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Browse } from '../pages/browse/browse';
import { Restaurant } from '../pages/restaurant/restaurant';
import { User } from '../pages/user/user';
import { Inbox } from '../pages/inbox/inbox';
import { Message } from '../pages/message/message';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Browse,
    Restaurant,
    User,
    Inbox,
    Message
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Browse,
    Restaurant,
    User,
    Inbox,
    Message
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
