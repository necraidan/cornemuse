import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  currentTime: number;
  duration: number;

  // @ViewChild('audio')
  // audioElement: ElementRef;
  audioElement: HTMLAudioElement;

  @ViewChild('progress')
  progress: ElementRef;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.musicPlaying.subscribe((elt: any) => {
      if (elt) {
        this.audioElement = new Audio('http://localhost:4200/api/music/' + elt);

        fromEvent(this.audioElement, 'canplaythrough').subscribe((res: Event) => {
          this.currentTime = this.audioElement.currentTime;
          this.duration = this.audioElement.duration;

          fromEvent(this.audioElement, 'timeupdate').subscribe((res: Event) => {
            this.currentTime = this.audioElement.currentTime;
            this.progress.nativeElement.value = (this.audioElement.currentTime * 100) / this.audioElement.duration;
          });
        });

        console.log(this.audioElement);
      }
    });
  }

  click(event: MouseEvent) {
    let x = event.pageX - this.progress.nativeElement.offsetLeft, // or e.offsetX (less support, though)
      y = event.pageY - this.progress.nativeElement.offsetTop, // or e.offsetY
      clickedValue = (x * this.progress.nativeElement.max) / this.progress.nativeElement.offsetWidth;

    this.audioElement.currentTime = (this.audioElement.duration * clickedValue) / 100;
  }

  play() {
    this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }
}
