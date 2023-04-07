import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { createSqlData } from '../helps';
export async function category() {
  await createSqlData(10, async (prisma: PrismaClient) => {
    await prisma.category.create({
      data: {
        title: Random.ctitle(),
      },
    });
  });
}
