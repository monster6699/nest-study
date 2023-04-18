import { DynamicModule, Global, Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { PrismaClient } from '@prisma/client';
@Global()
@Module({
  providers: [
    ArticleService,
    {
      provide: 'prismaClient',
      useValue: new PrismaClient(),
    },
  ],
  exports: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {
  static register(options: string): DynamicModule {
    return {
      module: ArticleModule,
      providers: [{ provide: 'registerServive', useValue: options }],
    };
  }
}
