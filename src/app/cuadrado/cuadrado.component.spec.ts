import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradoComponent } from './cuadrado.component';

describe('CuadradoComponent', () => {
  let component: CuadradoComponent;
  let fixture: ComponentFixture<CuadradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadradoComponent]
    });
    fixture = TestBed.createComponent(CuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
