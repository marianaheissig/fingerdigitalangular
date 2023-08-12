import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScreenComponent } from './client-screen.component';

describe('ClientScreenComponent', () => {
  let component: ClientScreenComponent;
  let fixture: ComponentFixture<ClientScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientScreenComponent]
    });
    fixture = TestBed.createComponent(ClientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
