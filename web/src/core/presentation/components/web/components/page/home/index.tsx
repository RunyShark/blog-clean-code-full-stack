import { Card, Header, Search } from '../../../../ui';
import { useAppSelector } from '../../../../../store/hooks/index';
import { useDispatch } from 'react-redux';
import { getByIdBlog } from '../../../../../store/slices/web/web-slice';

export const HomePage = () => {
  const {
    blogDataControl: { filteredBlogs },
  } = useAppSelector(({ core: { web } }) => web);
  const dispatch = useDispatch();

  const currentBlock = (id: string) => dispatch(getByIdBlog(id));

  return (
    <section>
      <Header />
      <article className="screen flex flex-col gap-20">
        <Search />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16 justify-items-center md:justify-items-start w-full pb-10">
          {filteredBlogs.map((blog) => (
            <Card
              {...blog}
              key={blog.id}
              onClick={() => currentBlock(blog.id)}
              to={`blog/${blog.title.split(' ').join('-')}`}
            />
          ))}
        </div>
      </article>
    </section>
  );
};
