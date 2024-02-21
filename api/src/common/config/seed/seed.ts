import { initData } from './seedData';
import { prisma } from '../db/prisma.service';

(async () => {
  if (process.env.NODE_ENV !== 'development') {
    console.log('seed script is only for development environment');
    process.exit(0);
  }

  console.log('deleted all blogs! 🗑️');

  await prisma.blog.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  initData.forEach(
    async ({ blog, email, password, profile }) =>
      await prisma.user.create({
        data: {
          email,
          password,
          profile: {
            create: {
              ...profile,
            },
          },
          blog: {
            create: {
              ...blog,
            },
          },
        },
      })
  );

  console.log('seeding blogs... 🌱🚀');
})();
