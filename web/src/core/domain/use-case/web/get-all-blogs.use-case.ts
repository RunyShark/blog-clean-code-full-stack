/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { BlogMapper } from '../../../infrastructure/mappers';
import { BlogEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
}

interface ResponseApi {
  data: BlogEntity[];
  state: number;
}

export class GetAllBlogsUseCase
  implements GenericUseCase<ExecuteArgs, BlogEntity[]>
{
  async execute({ fetcher }: ExecuteArgs): Promise<BlogEntity[]> {
    try {
      const response = await fetcher.get<ResponseApi>('/web/getBlogs');

      if (response.state !== 200)
        throw CustomError.internal('Error fetching blogs');

      return response.data.map(BlogMapper.toEntity);
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
