import { initData } from './seedData';
import { prisma } from '../db/prisma.service';

(async () => {
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
          Blog: {
            create: {
              ...blog,
            },
          },
        },
      })
  );

  console.log('seeding blogs... 🌱🚀');
})();
