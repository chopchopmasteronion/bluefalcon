import {Injectable} from '@angular/core';
import {Remind} from './remind';

@Injectable()
export class RemindDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for remind's
  reminds: Remind[] = [];

  constructor() {
  }

  // Simulate POST /reminds
  addRemind(remind: Remind): RemindDataService {
    remind.id = ++this.lastId;
    this.reminds.push(remind);
    return this;
  }

  // Simulate DELETE /reminds/:id
  deleteRemindById(id: number): RemindDataService {
    this.reminds = this.reminds
      .filter(remind => remind.id !== id);
    return this;
  }

  // Simulate PUT /reminds/:id
  updateRemindById(id: number, values: Object = {}): Remind {
    const remind = this.getRemindById(id);
    if (!remind) {
      return null;
    }
    Object.assign(remind, values);
    return remind;
  }

  // Simulate GET /reminds
  getAllReminds(): Remind[] {
    return this.reminds;
  }

  // Simulate GET /reminds/:id
  getRemindById(id: number): Remind {
    return this.reminds
      .filter(remind => remind.id === id)
      .pop();
  }

  // Toggle remind complete
  toggleRemindComplete(remind: Remind) {
    const updatedRemind = this.updateRemindById(remind.id, {
      complete: !remind.complete
    });
    return updatedRemind;
  }

}
