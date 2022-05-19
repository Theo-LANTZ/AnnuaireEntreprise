import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuaireDetailsComponent } from './annuaire-details.component';

describe('AnnuaireDetailsComponent', () => {
  let component: AnnuaireDetailsComponent;
  let fixture: ComponentFixture<AnnuaireDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuaireDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
