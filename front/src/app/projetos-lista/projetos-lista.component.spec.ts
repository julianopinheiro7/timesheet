import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosListaComponent } from './projetos-lista.component';

describe('ProjetosListaComponent', () => {
  let component: ProjetosListaComponent;
  let fixture: ComponentFixture<ProjetosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
