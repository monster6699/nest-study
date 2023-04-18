import { ArgumentMetadata, HttpStatus, HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ValidationError, validate } from 'class-validator';
import { values } from 'lodash';

@Injectable()
export class AddArticlePipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // throw new BadRequestException('参数错误');
    // if (!value.title) {
    //   throw new BadRequestException('title不能为空');
    // }
    // if (!value.content) {
    //   throw new BadRequestException('content不能为空');
    // }

    const obj = plainToInstance(metadata.metatype, value);
    const error = await validate(obj);
    if (error.length > 0) {
      const mes = error.map((item: ValidationError) => {
        return { name: item.property, message: values(item.constraints) };
      });
      throw new HttpException(mes, HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
