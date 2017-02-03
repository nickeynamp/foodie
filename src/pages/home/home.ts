import { Component } from '@angular/core';

import { App,MenuController } from 'ionic-angular';
import { BrowsePage } from '../pages/browse/browse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  browsePage = BrowsePage;

  constructor(app:App, menu:MenuController){
    menu.enable(true);
  }


}