import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdService {
  getEnv(): string {
    return 'prod env';
  }
}
