import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosFormComponent } from './projetos-form.component';

describe('ProjetosFormComponent', () => {
  let component: ProjetosFormComponent;
  let fixture: ComponentFixture<ProjetosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
