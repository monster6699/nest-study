import { Controller, Body, Post } from '@nestjs/common';
import { UserDto } from './dto/UserDto';

@Controller('validate-user')
export class ValidateUserController {
  @Post('register')
  registerUser(@Body() dot: UserDto) {
    return dot;
  }
}
