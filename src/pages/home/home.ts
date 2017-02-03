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

// @Component({
//   templateUrl: 'home.html'
// })
// export class searchPage{

// }
// @Component({
//   templateUrl: 'home.html'
// })

// export class profile{

// }

