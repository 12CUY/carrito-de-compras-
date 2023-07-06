import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooeterComponent } from './fooeter.component';

describe('FooeterComponent', () => {
  let component: FooeterComponent;
  let fixture: ComponentFixture<FooeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooeterComponent]
    });
    fixture = TestBed.createComponent(FooeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
