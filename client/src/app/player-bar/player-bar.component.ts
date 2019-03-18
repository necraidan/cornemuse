import { Component, OnInit } from '@angular/core';
import { PlayerState } from '../shared/models/player-state.model';

@Component({
  selector: 'player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {
  playerState: PlayerState = { isPlaying: false };

  constructor() {}

  ngOnInit() {}

  handlePlayerState(playerState: PlayerState) {
    this.playerState = playerState;
  }
}
