import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
