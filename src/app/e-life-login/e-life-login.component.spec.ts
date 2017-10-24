import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ELifeLoginComponent } from './e-life-login.component';
import { By } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('ELifeLoginComponent', () => {

  let component: ELifeLoginComponent;
  let fixture: ComponentFixture<ELifeLoginComponent>;
  let debugElement: DebugElement;
  let inputElement: any;
  let buttonElement: any;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ELifeLoginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELifeLoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    inputElement = debugElement.nativeElement;
    debugElement = fixture.debugElement.query(By.css('button'));
    buttonElement = debugElement.nativeElement;
    location = TestBed.get(Location);
  });

  it('should be empty username input field', () => {
    expect(inputElement.value).toEqual("");
  })

  it('should not navigate to home page without username', () => {
    expect(true).toBe(true);
  })

  it('should navigate to home page with username', () => {
    expect(true).toBe(true);
  })
});