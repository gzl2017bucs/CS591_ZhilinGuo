import { Component } from '@angular/core';
//import { CONTACTS} from './CONTACTS-MOCK';
//import {CONTACT} from './CONTACT';
import {RecentlyPlayedGame} from './RecentlyPlayedGame';
import {RecentlyPlayedGames} from './RecentlyPlayedGames-MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS591 PS5 - Get Recently Played Game';
  //contacts = CONTACTS;

  RecentlyPlayedGame = RecentlyPlayedGame;
  RecentlyPlayedGames = RecentlyPlayedGames;
  //private selectedContact: CONTACT;


  // selectContact(contact: CONTACT) {
  //   this.selectedContact = contact;
  //
  // }

  Math = Math;
}
