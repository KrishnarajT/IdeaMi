export class CourseModel {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public instructor: string = '',
    public image: string = '',
    public price: number = 0,
    public url: string = ''
  ) {}
}
