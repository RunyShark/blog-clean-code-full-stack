import { UserEntity } from '../../entities';

export interface GenericUseCase<Args, Response> {
  execute(args?: Args): Promise<Response>;
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

interface Account {
  email: string;
  profile: Profile;
  blog: Blog[];
}

export interface UserResponse {
  token: string;
  account: Account;
}

export interface ResponseApiUser {
  data: UserEntity;
  state: number;
}
