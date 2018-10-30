import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeDisciplinaComponent } from './editor-de-disciplina.component';

describe('EditorDeDisciplinaComponent', () => {
  let component: EditorDeDisciplinaComponent;
  let fixture: ComponentFixture<EditorDeDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDeDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDeDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
