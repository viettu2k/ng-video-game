import { HttpService } from './../../services/http.service';
import { Game, APIResponse } from './../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sort!: string;
  public games!: Game[];
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['game-search']) {
        this.searchGames('metacritic', params['game-search']);
      } else {
        this.searchGames('metacritic');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
      });
  }
}
