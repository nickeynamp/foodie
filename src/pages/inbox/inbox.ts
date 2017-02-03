import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'inbox.html'
})

export class Inbox {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}