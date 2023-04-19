import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('register')
  registerUser(@Body() dot: any) {
    return dot;
  }
}
