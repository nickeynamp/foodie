import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'restaurant.html'
})

export class Restaurant {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}