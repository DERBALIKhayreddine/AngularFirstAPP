import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimDeleteComponent } from './confim-delete.component';

describe('ConfimDeleteComponent', () => {
  let component: ConfimDeleteComponent;
  let fixture: ComponentFixture<ConfimDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfimDeleteComponent]
    });
    fixture = TestBed.createComponent(ConfimDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
