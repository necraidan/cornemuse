import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/shared/services/api-client.service';
import { StateService } from 'src/app/shared/services/state.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  musics: string[] = [];
  constructor(private apiClient: ApiClientService, private stateService: StateService) {}

  ngOnInit() {
    this.apiClient.getMusicList().subscribe((elt: any) => {
      console.log(elt);
      this.musics = elt.files.map(title => ({
        title
      }));
    });
  }

  play(title: string) {
    console.log(title);
    this.stateService.musicPlaying.next(title);
  }
}
