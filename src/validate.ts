import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export class Validate extends ValidationPipe {
  protected mapChildrenToValidationErrors(error: ValidationError, parentPath?: string): ValidationError[] {
    console.log('golabal-------------pipe');
    const errors = super.mapChildrenToValidationErrors(error, parentPath);
    // ValidationError {
    //     target: CreateArticleDto { title: '', content: '' },
    //     value: '',
    //     property: 'title',
    //     children: [],
    //     constraints: { isNotEmpty: '标题不能为空' }
    //   }
    errors.map((error: ValidationError) => {
      for (const key in error.constraints) {
        error.constraints[key] = error.property + '-' + error.constraints[key];
      }
    });

    return super.mapChildrenToValidationErrors(error, parentPath);
  }
}
