import {Component} from '@angular/core';
import {Remind} from './remind';
// Import class so we can register it as dependency injection token
import {RemindDataService} from './remind-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RemindDataService]
})
export class AppComponent {

  newRemind: Remind = new Remind();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `RemindDataService`
  // and assign it to a property called `remindDataService`
  constructor(private remindDataService: RemindDataService) {
  }

  addRemind() {
    this.remindDataService.addRemind(this.newRemind);
    this.newRemind = new Remind();
  }

  toggleRemindComplete(remind) {
    this.remindDataService.toggleRemindComplete(remind);
  }

  removeRemind(remind) {
    this.remindDataService.deleteRemindById(remind.id);
  }

  get reminds() {
    return this.remindDataService.getAllReminds();
  }

}
