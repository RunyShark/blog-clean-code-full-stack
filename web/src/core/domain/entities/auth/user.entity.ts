import { BlogEntity } from '../web';

export interface UserEntity {
  token: string;
  account: Account;
}

export interface Account {
  email: string;
  profile: Profile;
  blog: BlogEntity[];
}

export interface Profile {
  firstName: string;
  lastName: string;
  photo: string;
}
