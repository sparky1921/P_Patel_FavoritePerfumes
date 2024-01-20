import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumesListComponent } from './perfumes-list.component';

describe('PerfumesListComponent', () => {
  let component: PerfumesListComponent;
  let fixture: ComponentFixture<PerfumesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfumesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
