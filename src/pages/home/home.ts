import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}