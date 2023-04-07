import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { createSqlData } from '../helps';
export async function article() {
  createSqlData(10, async (prisma: PrismaClient) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(),
        content: Random.cparagraph(10, 50),
        categoryId: Math.ceil(Math.random() * 10),
      },
    });
  });
}
