import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromecastBlockComponent } from './chromecast-block.component';

describe('ChromecastBlockComponent', () => {
  let component: ChromecastBlockComponent;
  let fixture: ComponentFixture<ChromecastBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromecastBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromecastBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
