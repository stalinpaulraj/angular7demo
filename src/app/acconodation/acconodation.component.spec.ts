import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcconodationComponent } from './acconodation.component';

describe('AcconodationComponent', () => {
  let component: AcconodationComponent;
  let fixture: ComponentFixture<AcconodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcconodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcconodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
