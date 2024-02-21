export interface UserEntity {
  id: string;
  email: string;
  password: string;
  accountActive: boolean;
  profile: Profile;
  blog: Blog[];
}

interface Profile {
  firstName: string;
  lastName: string;
  photo: string;
}

interface Blog {
  title: string;
  author: string;
  content: string;
  imgUrl: string;
  dateOfPublication: string;
}
