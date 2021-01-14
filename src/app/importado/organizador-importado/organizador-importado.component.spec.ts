import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorImportadoComponent } from './organizador-importado.component';

describe('OrganizadorImportadoComponent', () => {
  let component: OrganizadorImportadoComponent;
  let fixture: ComponentFixture<OrganizadorImportadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizadorImportadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorImportadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
