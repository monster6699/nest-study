import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getAppName(): string {
    return this.appService.show();
  }

  @Get('env')
  getEnv(): any {
    return this.appService.getConfigEnv();
  }

  @Get('req')
  getReq(@Req() request: Request): string {
    console.log(request);
    return 'req';
  }

  @Get('user')
  getUser(): string {
    return this.appService.getUserEnv();
  }
}
