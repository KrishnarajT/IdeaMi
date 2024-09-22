export class CartModel {
  constructor(
    public courseId: number = 0,
    public name: string = '',
    public description: string = '',
    public instructor: string = '',
    public price: number = 0
  ) {}
}
