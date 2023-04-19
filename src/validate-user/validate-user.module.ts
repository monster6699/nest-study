import { Module } from '@nestjs/common';
import { ValidateUserService } from './validate-user.service';
import { ValidateUserController } from './validate-user.controller';

@Module({
  providers: [ValidateUserService],
  controllers: [ValidateUserController],
})
export class ValidateUserModule {}
