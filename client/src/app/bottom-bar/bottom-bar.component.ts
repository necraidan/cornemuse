import { Component, OnInit } from '@angular/core';
import { PlayerState } from '../shared/models/player-state.model';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  playerState: PlayerState = { isPlaying: false };

  constructor() {}

  ngOnInit() {}

  handlePlayerState(playerState: PlayerState) {
    this.playerState = playerState;
  }
}
