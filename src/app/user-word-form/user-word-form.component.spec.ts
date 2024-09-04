import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWordFormComponent } from './user-word-form.component';

describe('UserWordFormComponent', () => {
  let component: UserWordFormComponent;
  let fixture: ComponentFixture<UserWordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWordFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
