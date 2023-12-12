import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/fr";

const prisma = new PrismaClient();

const main = async () => {
  const users = [];

  for (let i = 0; i < 100; i++) {
    const user = {
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      name: faker.person.firstName(),
      bio: faker.lorem.paragraphs(),
      link: faker.internet.url(),
    } satisfies Prisma.UserCreateInput;

    const dbUser = await prisma.user.create({ data: user });
    users.push(dbUser);
  }

  const courses = [];
  for (let i = 0; i < 1000; i++) {
    const randomUserIndex = faker.number.int({
      min: 0,
      max: users.length - 1,
    });

    const course = {
      title: faker.lorem.words(),
      presentation: faker.lorem.paragraph(),
      userId: users[randomUserIndex].id,
      price: faker.number.float({
        min: 0,
        max: 1000,
      }),
      image: faker.image.url(),
    } satisfies Prisma.CourseUncheckedCreateInput;

    const c = await prisma.course.create({ data: course });
    courses.push(c);
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
