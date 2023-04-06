import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  constructor(@Inject('registerServive') private registerServive) {}
  getContent(): string {
    console.log(this.registerServive);
    return '--  this is articel ----' + this.registerServive;
  }
}
