import { Component, OnInit } from '@angular/core';
// import { CONTACTS} from './CONTACTS-MOCK';
// import {CONTACT} from './CONTACT';
import { RecentlyPlayedGame } from './models/RecentlyPlayedGame';
import { RecentlyPlayedGames } from './RecentlyPlayedGames-MOCK';
import { GetRecentlyPlayedGamesAsyncService } from './services/RecentlyGames-async.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private recentGamesService: GetRecentlyPlayedGamesAsyncService) {}

  // initializing variables
  title = 'CS591 PS6 - Search For User\'s Recently Played Games';
  SteamID: number;
  oneGame = RecentlyPlayedGame;
  recentGames = [];
  // for showing example output
  mockRecentlyPlayedGames = RecentlyPlayedGames;
  // for division and rounding
  Math = Math;

  // call backend to get recently played games in []
  getRecentGames(SteamID: number): void {
    this.recentGamesService.getRecentlyPlayedGames(SteamID)
      .subscribe(recentGames => {
        this.recentGames = recentGames;
      });
  }
}
