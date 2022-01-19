import {Item, Item2} from './item.interface';
import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {PostsService} from "./posts.service";
import {observeOn, of} from 'rxjs';
import {asyncScheduler} from 'rxjs';
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login('Kalo');
  }

  logout(){
    this.authService.logout();
  }




}



