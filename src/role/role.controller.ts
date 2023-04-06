import { ArticleService } from 'src/article/article.service';
import { RoleService } from './role.service';
import { Controller, Get } from '@nestjs/common';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService, private readonly articleService: ArticleService) {}
  @Get()
  getRoles(): string {
    return this.roleService.getRole() + this.articleService.getContent();
  }
}
