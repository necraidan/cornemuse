import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('audio')
  audioElement: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.audioElement);
    this.audioElement.nativeElement.play();

    fromEvent(this.audioElement.nativeElement, 'timeupdate').subscribe((res: Event) => {
      console.log(res);
      console.log(this.audioElement.nativeElement.currentTime);
      console.log(this.audioElement.nativeElement.duration);
      console.log((this.audioElement.nativeElement.currentTime * 100) / this.audioElement.nativeElement.duration);
    });
  }
}
