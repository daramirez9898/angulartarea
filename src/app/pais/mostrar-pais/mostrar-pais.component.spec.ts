import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPaisComponent } from './mostrar-pais.component';

describe('MostrarPaisComponent', () => {
  let component: MostrarPaisComponent;
  let fixture: ComponentFixture<MostrarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
