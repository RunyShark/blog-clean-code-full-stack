import { BlogDto } from "@domain/dtos/web/blog.dto";
import { BlogEntity } from "@domain/entities/web/user.entity";

export abstract class BlogDataSource {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract getBlogs(): Promise<BlogEntity[]>;
}
