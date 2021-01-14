import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorPaisComponent } from './organizador-pais.component';

describe('OrganizadorPaisComponent', () => {
  let component: OrganizadorPaisComponent;
  let fixture: ComponentFixture<OrganizadorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizadorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
