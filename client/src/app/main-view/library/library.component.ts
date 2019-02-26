import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  musics: string[] = [];
  constructor(private apiClient: ApiClientService, private stateService: StateService) {}

  ngOnInit() {
    this.apiClient.getMusicList().subscribe((elt: any) => {
      console.log(elt);
      this.musics = elt;
    });
  }

  play(music: any) {
    console.log(music);
    this.stateService.musicPlaying.next(music);
  }
}
