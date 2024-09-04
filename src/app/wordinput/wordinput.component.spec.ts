import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordinputComponent } from './wordinput.component';

describe('WordinputComponent', () => {
  let component: WordinputComponent;
  let fixture: ComponentFixture<WordinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
