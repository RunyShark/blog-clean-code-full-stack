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

    if (!title || Validators.isString(title))
      return [CustomError.badRequest('Title is required')];

    if (!author || Validators.isString(author)) {
      return [CustomError.badRequest('Author is required')];
    }

    if (!content || Validators.isString(content)) {
      return [CustomError.badRequest('Content is required')];
    }

    return [, new BlogDto(title, author, content, imgUrl)];
  }
}
