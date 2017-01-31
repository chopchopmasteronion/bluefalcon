export class Remind {
  id: number;
  title: string = '';
  time: Date;
  repeat: number;

  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
