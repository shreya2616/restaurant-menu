import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu/entities/menu.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host : 'localhost',
      port:3306,
      username : 'root',
      password : 'pass@word1',
      database : 'menudb',
      entities : [Menu],
      synchronize : true
    }),
    MenuModule
  ],
  
})
export class AppModule {}
