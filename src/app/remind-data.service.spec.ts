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

  // describe('#save(todo)', () => {
  //
  //   it('should automatically assign an incrementing id', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getTodoById(1)).toEqual(todo1);
  //     expect(service.getTodoById(2)).toEqual(todo2);
  //   }));
  //
  // });
  //
  // describe('#deleteTodoById(id)', () => {
  //
  //   it('should remove todo with the corresponding id', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getAllReminds()).toEqual([todo1, todo2]);
  //     service.deleteTodoById(1);
  //     expect(service.getAllReminds()).toEqual([todo2]);
  //     service.deleteTodoById(2);
  //     expect(service.getAllReminds()).toEqual([]);
  //   }));
  //
  //   it('should not removing anything if todo with corresponding id is not found', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo1 = new Todo({title: 'Hello 1', complete: false});
  //     let todo2 = new Todo({title: 'Hello 2', complete: true});
  //     service.addTodo(todo1);
  //     service.addTodo(todo2);
  //     expect(service.getAllReminds()).toEqual([todo1, todo2]);
  //     service.deleteTodoById(3);
  //     expect(service.getAllReminds()).toEqual([todo1, todo2]);
  //   }));
  //
  // });
  //
  // describe('#updateTodoById(id, values)', () => {
  //
  //   it('should return todo with the corresponding id and updated data', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.updateTodoById(1, {
  //       title: 'new title'
  //     });
  //     expect(updatedTodo.title).toEqual('new title');
  //   }));
  //
  //   it('should return null if todo is not found', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.updateTodoById(2, {
  //       title: 'new title'
  //     });
  //     expect(updatedTodo).toEqual(null);
  //   }));
  //
  // });
  //
  // describe('#toggleTodoComplete(todo)', () => {
  //
  //   it('should return the updated todo with inverse complete status', inject([RemindDataService], (service: RemindDataService) => {
  //     let todo = new Todo({title: 'Hello 1', complete: false});
  //     service.addTodo(todo);
  //     let updatedTodo = service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(true);
  //     service.toggleTodoComplete(todo);
  //     expect(updatedTodo.complete).toEqual(false);
  //   }));
  //
  // });

});
