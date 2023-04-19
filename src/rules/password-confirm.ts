import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint()
export class PasswordConfirm implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments): boolean | Promise<boolean> {
    return value === args.object[args.property + '_confirm'];
  }
}
