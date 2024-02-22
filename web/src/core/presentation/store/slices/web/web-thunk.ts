import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { GetAllBlogsUseCase } from '../../../../domain/use-case';
import { AppDispatch } from '../../store';
import { setBlog } from './web-slice';

class WebThunk {
  public initWeb(): (dispatch: AppDispatch) => Promise<void> {
    return async (dispatch: AppDispatch) => {
      const response = await new GetAllBlogsUseCase().execute({
        fetcher: blogFetcher,
        path: '/web/getBlogs',
      });

      dispatch(setBlog(response));
    };
  }
}

export const webThunk = new WebThunk();
