import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuairesListComponent } from './annuaires-list.component';

describe('AnnuairesListComponent', () => {
  let component: AnnuairesListComponent;
  let fixture: ComponentFixture<AnnuairesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuairesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuairesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
