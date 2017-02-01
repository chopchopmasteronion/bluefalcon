import {Remind} from './remind';

describe('Remind', () => {
  it('should create an instance', () => {
    expect(new Remind()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    var date = new Date('December 25, 1987');
    let remind = new Remind({
      title: 'hello',
      complete: true,
      time: date,
      repeat:15
    });
    expect(remind.title).toEqual('hello');
    expect(remind.complete).toEqual(true);
    expect(remind.time).toEqual(date);
    expect(remind.repeat).toEqual(15);
  });
});
