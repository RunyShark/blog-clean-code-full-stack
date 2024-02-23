import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { BlogMapper } from '../../../infrastructure/mappers';
import { DeleteBlogDto } from '../../dto';
import { BlogEntity } from '../../entities';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs extends DeleteBlogDto {
  fetcher: HttpAdapter;
  token: string;
}

interface ResponseApi {
  data: BlogEntity[];
  state: number;
}

export class CreateBlogUseCase
  implements GenericUseCase<ExecuteArgs, BlogEntity>
{
  async execute({ fetcher, blogId, token }: ExecuteArgs): Promise<BlogEntity> {
    try {
      const response = await fetcher.delete<ResponseApi>(`web/blog/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.state !== 200)
        throw CustomError.internal('Error fetching blogs');

      return BlogMapper.toEntity(response.data);
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
