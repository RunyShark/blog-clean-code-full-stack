import { Validators } from '@common/helper';
import { CustomError } from '@domain/errors/custom.error';
export class BlogDto {
  private constructor(
    public title: string,
    public author: string,
    public content: string,
    public imgUrl?: string
  ) {}

  static create(object: Record<string, any>): [CustomError?, BlogDto?] {
    const { title, author, content, imgUrl } = object;

    if (!title) return [CustomError.badRequest('Title is required')];

    if (!Validators.isString(title))
      return [CustomError.badRequest('Title must be a string')];

    if (!author) return [CustomError.badRequest('Author is required')];

    if (!Validators.isString(author))
      return [CustomError.badRequest('Author must be a string')];

    if (!content) return [CustomError.badRequest('Content is required')];

    if (!Validators.isString(content))
      return [CustomError.badRequest('Content must be a string')];

    return [, new BlogDto(title, author, content, imgUrl)];
  }
}
