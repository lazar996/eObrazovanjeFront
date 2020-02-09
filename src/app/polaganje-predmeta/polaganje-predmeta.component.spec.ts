import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaganjePredmetaComponent } from './polaganje-predmeta.component';

describe('PolaganjePredmetaComponent', () => {
  let component: PolaganjePredmetaComponent;
  let fixture: ComponentFixture<PolaganjePredmetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolaganjePredmetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaganjePredmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
