export class BlogEntity {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public content: string,
    public imgUrl: string,
    public dateOfPublication: string,
    public photoAuthor: string
  ) {}
}
