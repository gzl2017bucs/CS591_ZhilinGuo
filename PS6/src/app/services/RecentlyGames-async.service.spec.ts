import { TestBed } from '@angular/core/testing';
import { GetRecentlyPlayedGamesAsyncService } from './RecentlyGames-async.service';

// similar to angular21 code from lecture
describe('RecentGamesAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRecentlyPlayedGamesAsyncService = TestBed.get(GetRecentlyPlayedGamesAsyncService);
    expect(service).toBeTruthy();
  });
});
