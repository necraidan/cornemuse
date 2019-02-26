import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PlayerState } from 'src/app/shared/models/player-state.model';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  currentTime = 0;
  duration = 0;

  audioElement: HTMLAudioElement;

  @ViewChild('progress')
  progress: ElementRef;

  // FIX: Types
  canPlay: any;
  timeUpdate: any;

  @Output()
  playerState = new EventEmitter<PlayerState>();

  isPlaying: boolean;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.musicPlaying.subscribe((elt: any) => {
      if (elt) {
        this.beforeNewMusic();
        this.audioElement = new Audio('http://localhost:4200/api/music/' + elt.name);

        this.canPlay = fromEvent(this.audioElement, 'canplaythrough').subscribe((res: Event) => {
          console.log('loaded !');
          this.currentTime = this.audioElement.currentTime;
          this.duration = elt.duration;
        });

        this.timeUpdate = fromEvent(this.audioElement, 'timeupdate').subscribe((res: Event) => {
          this.currentTime = this.audioElement.currentTime;
          this.progress.nativeElement.value = (this.audioElement.currentTime * 100) / this.duration;
        });
      }
    });
  }

  click(event: MouseEvent) {
    const x = event.pageX - this.progress.nativeElement.offsetLeft; // or e.offsetX (less support, though)
    const y = event.pageY - this.progress.nativeElement.offsetTop; // or e.offsetY
    const clickedValue = (x * this.progress.nativeElement.max) / this.progress.nativeElement.offsetWidth;

    this.audioElement.currentTime = (this.duration * clickedValue) / 100;
  }

  play() {
    this.audioElement.play();
    this.isPlaying = true;
    this.playerState.emit({ isPlaying: this.isPlaying });
  }

  pause() {
    this.audioElement.pause();
    this.isPlaying = false;
    this.playerState.emit({ isPlaying: this.isPlaying });
  }

  beforeNewMusic() {
    // tslint:disable-next-line:no-unused-expression
    this.canPlay && this.canPlay.unsubscribe();
    // tslint:disable-next-line: no-unused-expression
    this.timeUpdate && this.timeUpdate.unsubscribe();
    // tslint:disable-next-line: no-unused-expression
    this.audioElement && this.audioElement.pause();

    this.progress.nativeElement.value = 0;
    this.isPlaying = false;
  }
}
