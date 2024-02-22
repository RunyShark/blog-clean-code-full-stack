export interface CreateUserDto {
  email: string;
  password: string;
  profile: ProfileDto;
}

interface ProfileDto {
  firstName: string;
  lastName: string;
  photo?: string;
}
