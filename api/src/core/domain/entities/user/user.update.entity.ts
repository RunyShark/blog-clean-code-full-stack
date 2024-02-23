export class UserUpdateEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public accountActive: boolean,
    public profile: {
      firstName: string;
      lastName: string;
      photo: string;
    },
    public blog: Blog[]
  ) {}
}

interface Blog {
  title: string;
  author: string;
  content: string;
  imgUrl: string;
  dateOfPublication: string;
}
