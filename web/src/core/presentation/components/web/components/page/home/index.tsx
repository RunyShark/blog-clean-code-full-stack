import { Card, Header, Search } from '../../../../ui';

export const HomePage = () => {
  return (
    <section>
      <Header />
      <article className="screen flex flex-col gap-20">
        <Search />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-16 justify-items-center md:justify-items-start w-full">
          <Card />
        </div>
      </article>
    </section>
  );
};
