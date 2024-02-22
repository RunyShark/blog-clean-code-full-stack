import { envs } from '../../../../../common/adapters/env';
import { blogFetcher } from '../../../../../common/adapters/http/blogApi.adapter';
import { GetAllBlogsUseCase } from '../../../../domain/use-case';
import { AppDispatch } from '../../store';

class WebThunk {
  public initWeb(): (dispatch: AppDispatch) => Promise<void> {
    return async () => {
      console.log('::::::::initWeb::::::::', envs.api_url);
      const response = await new GetAllBlogsUseCase().execute({
        fetcher: blogFetcher,
        path: '/web/getBlogs',
      });
    };
  }
}

export const webThunk = new WebThunk();
