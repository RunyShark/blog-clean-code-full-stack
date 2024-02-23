import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { DeleteBlogDto } from '../../dto';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs extends DeleteBlogDto {
  fetcher: HttpAdapter;
  token: string;
}

interface ResponseApi {
  data: boolean;
  state: number;
}

export class DeleteBlogUseCase implements GenericUseCase<ExecuteArgs, boolean> {
  async execute({ fetcher, blogId, token }: ExecuteArgs): Promise<boolean> {
    try {
      const response = await fetcher.delete<ResponseApi>(`web/blog/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.state !== 200)
        throw CustomError.internal('Error fetching blogs');

      return response.data;
    } catch (error) {
      throw CustomError.internal('Error fetching blogs');
    }
  }
}
