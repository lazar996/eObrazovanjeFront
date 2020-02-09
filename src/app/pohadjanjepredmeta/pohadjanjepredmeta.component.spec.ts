import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PohadjanjepredmetaComponent } from './pohadjanjepredmeta.component';

describe('PohadjanjepredmetaComponent', () => {
  let component: PohadjanjepredmetaComponent;
  let fixture: ComponentFixture<PohadjanjepredmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PohadjanjepredmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PohadjanjepredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
