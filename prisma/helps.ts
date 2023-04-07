import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export function createSqlData(count = 1, callback) {
  for (let index = 0; index < count; index++) {
    callback(prisma);
  }
}
