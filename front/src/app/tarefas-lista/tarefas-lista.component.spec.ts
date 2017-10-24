import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasListaComponent } from './tarefas-lista.component';

describe('TarefasListaComponent', () => {
  let component: TarefasListaComponent;
  let fixture: ComponentFixture<TarefasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
