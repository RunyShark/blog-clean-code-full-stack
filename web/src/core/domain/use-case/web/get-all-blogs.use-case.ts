/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { BlogMapper } from '../../../infrastructure/mappers';
import { BlogEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  path: string;
}

export class GetAllBlogsUseCase
  implements GenericUseCase<ExecuteArgs, BlogEntity[]>
{
  async execute({ fetcher, path }: ExecuteArgs): Promise<BlogEntity[]> {
    try {
      const response = await fetcher.get(`${path}`);
      return [BlogMapper.toEntity(response as Record<string, any>)];
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
