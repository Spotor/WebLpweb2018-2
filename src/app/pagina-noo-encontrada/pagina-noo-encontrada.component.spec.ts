import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNooEncontradaComponent } from './pagina-noo-encontrada.component';

describe('PaginaNooEncontradaComponent', () => {
  let component: PaginaNooEncontradaComponent;
  let fixture: ComponentFixture<PaginaNooEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNooEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNooEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
