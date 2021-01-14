import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarImportadoComponent } from './agregar-importado.component';

describe('AgregarImportadoComponent', () => {
  let component: AgregarImportadoComponent;
  let fixture: ComponentFixture<AgregarImportadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarImportadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarImportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
