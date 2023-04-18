import { Module, Inject } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from 'dotenv';
import { join } from 'path';
import { ProdService } from './prod.service';
import { DevService } from './dev.service';
import { UserService } from './user.service';
import { RoleModule } from './role/role.module';
import { ArticleModule } from './article/article.module';

config({ path: join(__dirname, '../.env') });
BigInt.prototype['toJSON'] = function () {
  return this.toString();
};
console.log(process.env.NODE_ENV);
const ConfigServices = {
  provide: 'configService',
  useClass: process.env.NODE_ENV === 'production' ? ProdService : DevService,
};
@Module({
  imports: [RoleModule, ArticleModule.register('register......')],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'appName', useValue: 'helloName' },
    ConfigServices,
    {
      provide: 'userService',
      inject: ['configService'],
      useFactory(configService: ProdService) {
        return new UserService(configService.getEnv());
      },
    },
  ],
})
export class AppModule {}
