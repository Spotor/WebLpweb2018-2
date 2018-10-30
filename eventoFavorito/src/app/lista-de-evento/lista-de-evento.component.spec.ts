import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEventoComponent } from './lista-de-evento.component';

describe('ListaDeEventoComponent', () => {
  let component: ListaDeEventoComponent;
  let fixture: ComponentFixture<ListaDeEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
