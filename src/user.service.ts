import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly env: string) {}
  getUserEnv() {
    return `user ${this.env}`;
  }
}
