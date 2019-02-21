import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  musicPlaying: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {}
}
