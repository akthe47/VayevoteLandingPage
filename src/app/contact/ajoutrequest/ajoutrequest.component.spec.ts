import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrequestComponent } from './ajoutrequest.component';

describe('AjoutrequestComponent', () => {
  let component: AjoutrequestComponent;
  let fixture: ComponentFixture<AjoutrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
