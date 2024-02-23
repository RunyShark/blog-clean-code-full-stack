import { HttpAdapter } from '../../../../common/adapters/http/http.adapter';
import { JWT } from '../../../../common/adapters/jwt';
import { CustomError } from '../../errors/custom.error';
import { GenericUseCase } from '../interface';

interface ExecuteArgs {
  fetcher: HttpAdapter;
  token: string;
}

interface ResponseApi {
  data: boolean;
  state: number;
}

export class DeleteUserUseCase implements GenericUseCase<ExecuteArgs, boolean> {
  async execute({ fetcher, token }: ExecuteArgs): Promise<boolean> {
    try {
      const decode = JWT.decode<{ id: string }>(token);

      if (!decode) throw CustomError.internal('Error fetching Users');

      const response = await fetcher.delete<ResponseApi>(
        `/user/account/${decode.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.state !== 200)
        throw CustomError.internal('Error fetching Users');

      return response.data;
    } catch (error) {
      throw CustomError.internal('Error fetching Users');
    }
  }
}
