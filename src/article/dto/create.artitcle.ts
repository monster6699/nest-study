import { IsNotEmpty, IsString } from 'class-validator';
export class CreateArticleDto {
  @IsNotEmpty({ message: '标题不能为空' })
  @IsString({ message: '标题必须是字符串' })
  title: string;
  @IsNotEmpty({ message: '内容不能为空' })
  content: string;
}
