import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdboutusComponent } from './adboutus.component';

describe('AdboutusComponent', () => {
  let component: AdboutusComponent;
  let fixture: ComponentFixture<AdboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
