import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from 'dotenv';
import { join } from 'path';
import { ProdService } from './prod.service';
import { DevService } from './dev.service';

config({ path: join(__dirname, '../.env') });
console.log(process.env.NODE_ENV);
const configServices = {
  provide: 'configService',
  useClass: process.env.NODE_ENV === 'production' ? ProdService : DevService,
};
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'appName', useValue: 'helloName' },
    configServices,
  ],
})
export class AppModule {}
