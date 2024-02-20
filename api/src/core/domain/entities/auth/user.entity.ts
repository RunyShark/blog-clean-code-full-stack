export class UserEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public profile: {
      firstNames: string;
      lastNames: string;
      photo: string;
    },
    public Blog: {
      title: string;
      author: string;
      content: string;
      imgUrl: string;
      createdAt: Date;
    }
  ) {}
}
