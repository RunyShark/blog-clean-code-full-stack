import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { DeleteBlogDto } from '../../../../domain/dto';
import { BlogDto } from '../../../../domain/dto/web/blog.dto';
import {
  GetAllBlogsUseCase,
  DeleteBlogUseCase,
} from '../../../../domain/use-case';
import { CreateBlogUseCase } from '../../../../domain/use-case/web/create-blog.use-case';
import { AppDispatch, RootState } from '../../store';
import { deleteBlogDataUser, updateBlogDataUser } from '../auth/auth-slice';
import {
  deleteBlog,
  resetErrorState,
  setBlog,
  setErrorState,
  setLoadingState,
  updateBlogData,
} from './web-slice';

class WebThunk {
  public delete({
    blogId,
  }: DeleteBlogDto): (
    dispatch: AppDispatch,
    getState: () => RootState
  ) => Promise<void> {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      const { token } = getState().core.session.user;

      try {
        dispatch(setLoadingState(true));
        const response = await new DeleteBlogUseCase().execute({
          fetcher: blogFetcher,
          blogId,
          token,
        });

        if (!response) {
          dispatch(setErrorState('Error deleting blog'));
          return;
        }

        dispatch(deleteBlogDataUser(blogId));
        dispatch(deleteBlog(blogId));
        dispatch(resetErrorState());
      } catch (error) {
        dispatch(setErrorState('Init web error: ' + error));
      } finally {
        dispatch(setLoadingState(false));
      }
    };
  }
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

        dispatch(updateBlogDataUser(response));
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
