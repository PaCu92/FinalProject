import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoArticoliComponent } from './elenco-articoli.component';

describe('ElencoArticoliComponent', () => {
  let component: ElencoArticoliComponent;
  let fixture: ComponentFixture<ElencoArticoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoArticoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoArticoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
