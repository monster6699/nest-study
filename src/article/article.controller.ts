import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticlePipe } from './article.pipe';
import { AddArticlePipe } from './addArticle.pipe';
import { CreateArticleDto } from './dto/create.artitcle';

// @UsePipes(ArticlePipe)
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get()
  getArticle(): any {
    return 'aaa';
  }

  @Get('param:id')
  async getArticleById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    const res = await this.articleService.findOne(id);
    return res;
  }

  /**
   *自定义管道
   *
   * @param {number} customId
   * @return {*}
   * @memberof ArticleController
   */
  // @UsePipes(ArticlePipe)
  @Get('query')
  async getCategoryById(@Query('customId', new DefaultValuePipe(1), ParseIntPipe) customId: number) {
    const res = await this.articleService.findCategoryOne(customId);
    return res;
  }

  @Post('add')
  async addArticleContent(@Body() dot: CreateArticleDto) {
    return dot;
  }
}
