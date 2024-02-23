import { CustomError } from '@domain/errors/custom.error';

export class DeleteBlogDto {
  private constructor(public blogId: string) {}

  static create(object: Record<string, any>): [CustomError?, DeleteBlogDto?] {
    const { blogId } = object;

    if (!blogId) return [CustomError.badRequest('blogId id is required')];

    return [, new DeleteBlogDto(blogId)];
  }
}
