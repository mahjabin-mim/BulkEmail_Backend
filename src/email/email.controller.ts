import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './DTOs/email.dto';
import { History } from '../entities/history.entity';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() createEmailDto: CreateEmailDto): Promise<History> {
    const emailHistory = await this.emailService.sendEmail(createEmailDto);
    return emailHistory;
  }
}



