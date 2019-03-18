import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCoverComponent } from './music-cover.component';

describe('MusicCoverComponent', () => {
  let component: MusicCoverComponent;
  let fixture: ComponentFixture<MusicCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
