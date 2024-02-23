export interface UpdateProfileDto {
  email: string;
  password: string;
  profile: Partial<ProfileDto>;
}

interface ProfileDto {
  firstName: string;
  lastName: string;
  photo: string;
}
