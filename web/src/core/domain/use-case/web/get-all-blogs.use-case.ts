/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { BlogMapper } from '../../../infrastructure/mappers';
import { BlogEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

export class getAllBlogsUseCase
  implements
    GenericUseCase<{ fetcher: HttpAdapter; path: string }, BlogEntity[]>
{
  async execute(args: {
    fetcher: HttpAdapter;
    path: string;
  }): Promise<BlogEntity[]> {
    try {
      const response = await args.fetcher.get(`/${args!.path}`);
      return [BlogMapper.toEntity(response as Record<string, any>)];
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
