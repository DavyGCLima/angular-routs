import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunFormComponent } from './alun-form.component';

describe('AlunFormComponent', () => {
  let component: AlunFormComponent;
  let fixture: ComponentFixture<AlunFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
