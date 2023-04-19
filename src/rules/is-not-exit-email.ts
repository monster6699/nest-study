import { PrismaClient } from '@prisma/client';
import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';

export function IsNotExitEmail(property: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExitEmail',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const prisma = new PrismaClient();
          const res = await prisma[property].findFirst({
            where: {
              [args.property]: value,
            },
          });

          return !Boolean(res);
        },
      },
    });
  };
}
