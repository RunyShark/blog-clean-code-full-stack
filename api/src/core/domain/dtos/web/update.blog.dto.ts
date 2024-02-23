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
    console.log('object', object);
    if (!blogId) return [CustomError.badRequest('Blog id is required')];

    if (!userId)
      return [CustomError.badRequest('User id is required to update blog')];

    return [, new UpdateBlogDto(blogId, title, content, imgUrl)];
  }
}
