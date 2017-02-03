import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'message.html'
})

export class Message {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}