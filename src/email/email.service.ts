import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateEmailDto } from './DTOs/email.dto';

@Injectable()
export class EmailService {
  async sendEmail(createEmailDto: CreateEmailDto) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: '01712622555software@gmail.com',
        pass: 'yfrs yleq zton zstj',
      },
    });

    await transporter.sendMail({
      from: '01712622555software@gmail.com',
      to: createEmailDto.to,
      subject: createEmailDto.subject,
      text: createEmailDto.body,
    });
  }
}
