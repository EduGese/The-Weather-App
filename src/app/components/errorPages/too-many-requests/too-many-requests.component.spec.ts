import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooManyRequestsComponent } from './too-many-requests.component';

describe('TooManyRequestsComponent', () => {
  let component: TooManyRequestsComponent;
  let fixture: ComponentFixture<TooManyRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooManyRequestsComponent]
    });
    fixture = TestBed.createComponent(TooManyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
