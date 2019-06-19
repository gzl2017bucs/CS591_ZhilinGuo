import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecentlyPlayedGame} from '../models/RecentlyPlayedGame';
import {endpoints} from '../config/PS6Config';

@Injectable({
  providedIn: 'root'
})

// class for Angular service to get recently played games
export class GetRecentlyPlayedGamesAsyncService {
  // Very similar to angular21 code from lecture
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };

  // custom endpoint from config file
  PS4Endpoint = endpoints.BASE;

  // angular service method
  getRecentlyPlayedGames(SteamID: number): Observable<RecentlyPlayedGame[]> {
    return this.httpClient.get<RecentlyPlayedGame[]>(this.PS4Endpoint + SteamID.toString(), this.httpOptions );
  }
  constructor(private httpClient: HttpClient) { }
}
