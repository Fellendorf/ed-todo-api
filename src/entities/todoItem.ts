export default class TodoItem {
  public id: number;
  public date: number;
  public text: string;

  constructor({ id, date, text }: { id: number; date: number; text: string }) {
    this.id = id;
    this.date = date;
    this.text = text;
  }
}
