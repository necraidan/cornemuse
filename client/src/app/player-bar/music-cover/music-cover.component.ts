import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'music-cover',
  templateUrl: './music-cover.component.html',
  styleUrls: ['./music-cover.component.scss']
})
export class MusicCoverComponent implements OnInit {
  constructor() {}

  @Input()
  isPlaying: boolean;

  ngOnInit() {}
}
