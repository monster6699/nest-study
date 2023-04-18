import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ArticlePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata); //{ metatype: [Function: Number], type: 'param', data: 'customId' }
    // throw new BadRequestException('参数错误');
    return metadata.metatype === Number ? +value : value;
  }
}
