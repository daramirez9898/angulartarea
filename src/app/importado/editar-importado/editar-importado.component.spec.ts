import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarImportadoComponent } from './editar-importado.component';

describe('EditarImportadoComponent', () => {
  let component: EditarImportadoComponent;
  let fixture: ComponentFixture<EditarImportadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarImportadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarImportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
