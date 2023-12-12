import { prisma } from "@/lib/prisma";

export const getCourses = (userId?: string) =>
  prisma.course.findMany({
    take: 20,
    orderBy: {
      createdAt: "desc",
    },
    where: {
      user: {
        id: userId,
      },
    },
    select: {
      id: true,
      presentation: true,
      title: true,
      image: true,
      price: true,
      user: {
        select: {
          name: true,
          image: true,
          email: true,
          id: true,
          username: true,
        },
      },
    },
  });
