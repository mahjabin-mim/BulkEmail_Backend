import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './DTOs/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() createEmailDto: CreateEmailDto) {
    await this.emailService.sendEmail(createEmailDto);
    return { message: 'Email sent successfully' };
  }
}
