import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'user.html'
})

export class User {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}