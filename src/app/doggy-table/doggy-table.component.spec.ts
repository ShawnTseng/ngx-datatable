import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyTableComponent } from './doggy-table.component';

describe('DoggyTableComponent', () => {
  let component: DoggyTableComponent;
  let fixture: ComponentFixture<DoggyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
