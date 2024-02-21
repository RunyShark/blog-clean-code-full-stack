import { AppDispatch } from '../../store';

class AuthThunk {
  public signUpThunk(): (dispatch: AppDispatch) => Promise<void> {
    return async () => {};
  }
}

export const authThunk = new AuthThunk();
