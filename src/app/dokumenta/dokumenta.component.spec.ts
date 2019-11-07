import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentaComponent } from './dokumenta.component';

describe('DokumentaComponent', () => {
  let component: DokumentaComponent;
  let fixture: ComponentFixture<DokumentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
