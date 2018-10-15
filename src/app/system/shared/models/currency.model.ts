export class Currency {
  constructor(
    public date: Date,
    public base: string,
    public rates: Object
  ) {}
}
