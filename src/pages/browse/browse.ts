import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'browse.html'
})

export class Browse {
  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }
}