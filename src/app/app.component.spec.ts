/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Remind } from './remind';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a newRemind remind`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newRemind instanceof Remind).toBeTruthy();
  }));

  it(`should create a new reminder and update lastId`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.addRemind();
    expect(app.remindDataService.lastId).toEqual(1);
  }));

  it(`should create a new reminder and remove the reminder`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.addRemind();
    expect(app.remindDataService.lastId).toEqual(1);
    let remind1 = app.remindDataService.getRemindById(1);
    expect(app.remindDataService.getAllReminds()).toEqual([remind1])
    app.removeRemind(remind1);
    expect(app.remindDataService.getAllReminds()).toEqual([]);
  }));

  it(`should toggle the complete status of a remind`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.addRemind();
    expect(app.remindDataService.lastId).toEqual(1);
    const remind1 = app.remindDataService.getRemindById(1);
    app.toggleRemindComplete(remind1);
    expect(remind1.complete).toEqual(true);
    app.toggleRemindComplete(remind1);
    expect(remind1.complete).toEqual(false);
  }));

  it('should display "Reminders" in h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Reminders');
  }));
});
