import { CustomError } from '@domain/errors/custom.error';

export class UpdateBlogDto {
  private constructor(
    public blogId: string,
    public title?: string,
    public content?: string,
    public imgUrl?: string
  ) {}

  static create(object: Record<string, any>): [CustomError?, UpdateBlogDto?] {
    const { title, blogId, content, imgUrl, userId } = object;

    if (!blogId) return [CustomError.badRequest('Blog id is required')];

    return [, new UpdateBlogDto(blogId, title, content, imgUrl)];
  }
}
