import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPaisComponent } from './modificar-pais.component';

describe('ModificarPaisComponent', () => {
  let component: ModificarPaisComponent;
  let fixture: ComponentFixture<ModificarPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
