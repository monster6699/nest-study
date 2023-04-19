import { Validate } from 'class-validator';
import { IsNotExitEmail } from 'src/rules/is-not-exit-email';
import { PasswordConfirm } from 'src/rules/password-confirm';

export class UserDto {
  id: number;
  @IsNotExitEmail('user', { message: '邮箱已存在' })
  email: string;
  @Validate(PasswordConfirm, { message: '密码不一致' })
  password: string;
  avatar: string;
  github: string;
  douyi: string;
  waketime: string;
  createdAt: string;
  updatedAt: string;
}
