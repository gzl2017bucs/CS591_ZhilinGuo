import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecentlyPlayedGame} from '../models/RecentlyPlayedGame';
import {endpoints} from '../config/PS6Config';

@Injectable({
  providedIn: 'root'
})

// service for Angular service to get recently played games
export class GetRecentlyPlayedGamesAsyncService {
  // custom endpoint from config file
  PS4Endpoint = endpoints.BASE;

  getRecentlyPlayedGames(SteamID: number): Observable<RecentlyPlayedGame[]> {
    const endpoint = this.PS4Endpoint + SteamID.toString;
    return this.client.get<RecentlyPlayedGame[]>(endpoint);
  }
  constructor(private client: HttpClient) {}
}
