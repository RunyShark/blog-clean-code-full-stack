import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { GetAllBlogsUseCase } from '../../../../domain/use-case';
import { AppDispatch } from '../../store';
import {
  resetErrorState,
  setBlog,
  setErrorState,
  setLoadingState,
} from './web-slice';

class WebThunk {
  public initWeb(): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoadingState(true));
        const response = await new GetAllBlogsUseCase().execute({
          fetcher: blogFetcher,
          path: '/web/getBlogs',
        });

        dispatch(setBlog(response));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Error al registrar el usuario: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }
}

export const webThunk = new WebThunk();
