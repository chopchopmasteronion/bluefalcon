export class Remind {
  id: number;
  title: '';
  time: Date;
  repeat: number;

  complete: false;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
