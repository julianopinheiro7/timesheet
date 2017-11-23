import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListaComponent } from './status-lista.component';

describe('StatusListaComponent', () => {
  let component: StatusListaComponent;
  let fixture: ComponentFixture<StatusListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
