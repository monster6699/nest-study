import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('appName') private appName: string,
    @Inject('configService') private configService,
    @Inject('userService') private userService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  show(): string {
    return this.appName;
  }

  getConfigEnv(): any {
    return this.configService.getEnv();
  }

  getUserEnv(): string {
    return this.userService.getUserEnv();
  }
}
