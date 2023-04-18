import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('registerServive') private registerServive,
    @Inject('prismaClient') private prismaClient: PrismaClient,
  ) {}

  getContent(): string {
    return this.registerServive;
  }

  async findOne(id: number) {
    const content = await this.prismaClient.article.findUnique({
      where: {
        id,
      },
    });
    return content;
  }

  async findCategoryOne(id: number) {
    const content = await this.prismaClient.category.findUnique({
      where: {
        id,
      },
    });
    return content;
  }
}
