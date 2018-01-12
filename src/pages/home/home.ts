import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuData = [
    { title: 'Our Menu', pic: 'assets/img/soup1.jpg', pushPage: 'MenuPage' },
    { title: 'Account', pic: 'assets/img/coffee-people3.jpg', pushPage: 'AcountPage' },
    { title: 'About Us', pic: 'assets/img/coffee6.jpg', pushPage: 'AboutPage' },
    { title: 'Locations', pic: 'assests/img/cafe2.jpg', pushpage: 'LocationsPage' }
  ]
  constructor(public navCtrl: NavController) {

  }

}
