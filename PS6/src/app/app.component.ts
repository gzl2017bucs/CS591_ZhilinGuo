import { Component, OnInit } from '@angular/core';
//import { CONTACTS} from './CONTACTS-MOCK';
//import {CONTACT} from './CONTACT';
import {RecentlyPlayedGame} from './models/RecentlyPlayedGame';
import {RecentlyPlayedGames} from './RecentlyPlayedGames-MOCK';
import { GetRecentlyPlayedGamesAsyncService } from './services/RecentlyGames-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "CS591 PS6 - Search For User's Recently Played Games";
  SteamID: number;
  //contacts = CONTACTS;

  RecentlyPlayedGame = RecentlyPlayedGame;
  RecentlyPlayedGames = RecentlyPlayedGames;

  currentRecentlyPlayedGames: RecentlyPlayedGame[];

  //private selectedContact: CONTACT;


  // selectContact(contact: CONTACT) {
  //   this.selectedContact = contact;
  //
  // }

  submitSteamID(): void {
    let inputSteamID: number = this.SteamID;
    this.recentGamesService.getRecentlyPlayedGames(inputSteamID)
      .subscribe(games => {
        this.currentRecentlyPlayedGames = games;
        //console.log(`Contacts: ${this.contacts}`)
      });
  }

  Math = Math;

  constructor(private recentGamesService: GetRecentlyPlayedGamesAsyncService) {

  }
  ngOnInit() {
    this.submitSteamID();
  }
}
