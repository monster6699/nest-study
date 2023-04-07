import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';
import { createSqlData } from '../helps';
export async function user() {
  createSqlData(10, async (prisma: PrismaClient) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: Random.string(),
        avatar: Random.image(),
        douyi: Random.url(),
        waketime: Random.time(),
        github: Random.url(),
      },
    });
  });
}
