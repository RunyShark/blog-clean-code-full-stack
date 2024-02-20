export interface GenericUseCase<Args, Response> {
  execute(args?: Args): Promise<Response>;
}

interface Profile {
  firstNames: string;
  lastNames: string;
  photo: string;
}

interface Blog {
  title: string;
  author: string;
  content: string;
  imgUrl: string;
  createdAt: string;
}

interface Account {
  firstName: string;
  lastName: string;
  email: string;
  profile: Profile;
  blog: Blog[];
}

export interface UserResponse {
  token: string;
  account: Account;
}
