import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from '../entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [EmailService],
  controllers: [EmailController],
})

export class EmailModule {}
