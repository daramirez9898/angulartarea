import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarImportadoComponent } from './modificar-importado.component';

describe('ModificarImportadoComponent', () => {
  let component: ModificarImportadoComponent;
  let fixture: ComponentFixture<ModificarImportadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarImportadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarImportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
