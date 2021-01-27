import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRecipesComponent } from './dashboard-recipes.component';

describe('DashboardRecipesComponent', () => {
  let component: DashboardRecipesComponent;
  let fixture: ComponentFixture<DashboardRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
