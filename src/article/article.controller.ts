import { Controller, Get, Inject } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  //   constructor(@Inject('registerServive') private registerServive) {}
  @Get()
  getArticle(): any {
    return 'aaa';
  }
}
