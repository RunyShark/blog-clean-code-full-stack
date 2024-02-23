import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { BlogMapper } from '../../../infrastructure/mappers';
import { UpdateBlogDto } from '../../dto';
import { BlogEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  updateBlogDto: UpdateBlogDto;
  token: string;
}

interface ResponseApi {
  data: BlogEntity[];
  state: number;
}

export class UpdateBlogUseCase
  implements GenericUseCase<ExecuteArgs, BlogEntity>
{
  async execute({
    fetcher,
    updateBlogDto,
    token,
  }: ExecuteArgs): Promise<BlogEntity> {
    try {
      const response = await fetcher.put<ResponseApi>(
        '/web/blog',
        { ...updateBlogDto },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.state !== 200)
        throw CustomError.internal('Error fetching blogs');

      return BlogMapper.toEntity(response.data);
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
