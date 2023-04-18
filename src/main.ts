import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { Validate } from './validate';
import { ValidateExceptionFilter } from './validate-exception/validate-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ValidateExceptionFilter());
  app.useGlobalPipes(new Validate());
  await app.listen(3000);
}
bootstrap();
