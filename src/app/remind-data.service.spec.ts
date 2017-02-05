import {TestBed, async, inject} from '@angular/core/testing';
import {Remind} from './remind';
import {RemindDataService} from './remind-data.service';

describe('RemindDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemindDataService]
    });
  });

  it('should ...', inject([RemindDataService], (service: RemindDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllReminds()', () => {

    it('should return an empty array by default', inject([RemindDataService], (service: RemindDataService) => {
      expect(service.getAllReminds()).toEqual([]);
    }));

    it('should return all reminds', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      const remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
    }));

  });

  describe('#save(remind)', () => {

    it('should automatically assign an incrementing id', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      const remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getRemindById(1)).toEqual(remind1);
      expect(service.getRemindById(2)).toEqual(remind2);
    }));

  });

  describe('#deleteRemindById(id)', () => {

    it('should remove remind with the corresponding id', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      const remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
      service.deleteRemindById(1);
      expect(service.getAllReminds()).toEqual([remind2]);
      service.deleteRemindById(2);
      expect(service.getAllReminds()).toEqual([]);
    }));

    it('should not remove anything if remind with corresponding id is not found',
          inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      const remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
      service.deleteRemindById(3);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
    }));

  });

  describe('#updateRemindById(id, values)', () => {

    it('should return remind with the corresponding id and updated title', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(1, {
        title: 'new title',
      });
      expect(updatedRemind.title).toEqual('new title');
    }));

    it('should return remind with the corresponding id and updated time', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const date2 = new Date('December 26, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(1, {
        date: date2,
      });
      expect(updatedRemind.date).toEqual(date2);
    }));

    it('should return remind with the corresponding id and updated repeat interval',
          inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(1, {
        repeat: 20,
      });
      expect(updatedRemind.repeat).toEqual(20);
    }));

    it('should return remind with updated title, comeplete status, date, and repeat interval',
          inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const date2 = new Date('December 26, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(1, {
        title: 'new title',
        complete: true,
        time: date2,
        repeat: 20,
      });
      expect(updatedRemind.title).toEqual('new title');
      expect(updatedRemind.complete).toBeTruthy;
      expect(updatedRemind.time).toEqual(date2);
      expect(updatedRemind.repeat).toEqual(20);
    }));

    it('should return null if remind is not found', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(2, {
        title: 'new title'
      });
      expect(updatedRemind).toEqual(null);
    }));

    it('should return null if no values are specified', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.updateRemindById(1);
      expect(updatedRemind).toEqual(remind);
    }));

  });

  describe('#toggleRemindComplete(remind)', () => {

    it('should return the updated remind with inverse complete status', inject([RemindDataService], (service: RemindDataService) => {
      const date = new Date('December 25, 1987');
      const remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      const updatedRemind = service.toggleRemindComplete(remind);
      expect(updatedRemind.complete).toEqual(true);
      service.toggleRemindComplete(remind);
      expect(updatedRemind.complete).toEqual(false);
    }));

  });

});
