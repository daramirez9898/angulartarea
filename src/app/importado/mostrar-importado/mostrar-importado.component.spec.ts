import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImportadoComponent } from './mostrar-importado.component';

describe('MostrarImportadoComponent', () => {
  let component: MostrarImportadoComponent;
  let fixture: ComponentFixture<MostrarImportadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarImportadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarImportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
