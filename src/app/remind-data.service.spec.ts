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
      var date = new Date('December 25, 1987');
      let remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      let remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
    }));

  });

  describe('#save(remind)', () => {

    it('should automatically assign an incrementing id', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      let remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getRemindById(1)).toEqual(remind1);
      expect(service.getRemindById(2)).toEqual(remind2);
    }));

  });

  describe('#deleteRemindById(id)', () => {

    it('should remove todo with the corresponding id', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      let remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
      service.deleteRemindById(1);
      expect(service.getAllReminds()).toEqual([remind2]);
      service.deleteRemindById(2);
      expect(service.getAllReminds()).toEqual([]);
    }));

    it('should not removing anything if remind with corresponding id is not found', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind1 = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      let remind2 = new Remind({title: 'Hello 2', complete: true, time: date, repeat: 30});
      service.addRemind(remind1);
      service.addRemind(remind2);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
      service.deleteRemindById(3);
      expect(service.getAllReminds()).toEqual([remind1, remind2]);
    }));

  });

  describe('#updateRemindById(id, values)', () => {

    it('should return remind with the corresponding id and updated data', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      let updatedRemind = service.updateRemindById(1, {
        title: 'new title'
      });
      expect(updatedRemind.title).toEqual('new title');
    }));

    it('should return null if remind is not found', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      let updatedRemind = service.updateRemindById(2, {
        title: 'new title'
      });
      expect(updatedRemind).toEqual(null);
    }));

  });

  describe('#toggleRemindComplete(remind)', () => {

    it('should return the updated remind with inverse complete status', inject([RemindDataService], (service: RemindDataService) => {
      var date = new Date('December 25, 1987');
      let remind = new Remind({title: 'Hello 1', complete: false, time: date, repeat: 15});
      service.addRemind(remind);
      let updatedRemind = service.toggleRemindComplete(remind);
      expect(updatedRemind.complete).toEqual(true);
      service.toggleRemindComplete(remind);
      expect(updatedRemind.complete).toEqual(false);
    }));

  });

});
