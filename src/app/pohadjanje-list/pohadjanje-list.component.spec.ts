import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PohadjanjeListComponent } from './pohadjanje-list.component';

describe('PohadjanjeListComponent', () => {
  let component: PohadjanjeListComponent;
  let fixture: ComponentFixture<PohadjanjeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PohadjanjeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PohadjanjeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
