import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { BlogDto } from '../../../../domain/dto/web/blog.dto';
import { GetAllBlogsUseCase } from '../../../../domain/use-case';
import { CreateBlogUseCase } from '../../../../domain/use-case/web/create-blog.use-case';
import { AppDispatch, RootState } from '../../store';
import {
  resetErrorState,
  setBlog,
  setErrorState,
  setLoadingState,
  updateBlogData,
} from './web-slice';

class WebThunk {
  public initWeb(): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setLoadingState(true));
        const response = await new GetAllBlogsUseCase().execute({
          fetcher: blogFetcher,
        });

        dispatch(setBlog(response));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Init web error: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }

  public createNewPost(
    blogDto: Omit<BlogDto, 'author' | 'userId'>
  ): (dispatch: AppDispatch, getState: () => RootState) => Promise<void> {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const {
        token,
        account: {
          profile: { firstName, lastName },
        },
      } = getState().core.session.user;
      if (!token) {
        dispatch(setErrorState('Error token not found'));
        return;
      }
      try {
        dispatch(setLoadingState(true));
        const response = await new CreateBlogUseCase().execute({
          fetcher: blogFetcher,
          blogDto: {
            ...blogDto,
            author: `${firstName} ${lastName}`,
          },
          token,
        });

        dispatch(updateBlogData(response));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Error creating blog: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }
}

export const webThunk = new WebThunk();
