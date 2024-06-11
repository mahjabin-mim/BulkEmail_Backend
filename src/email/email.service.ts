import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateEmailDto } from './DTOs/email.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from '../entities/history.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>,
  ) {}

  async sendEmail(createEmailDto: CreateEmailDto): Promise<History> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: '01712622555software@gmail.com',
        pass: 'aqgq zsne knjn wgsm',
      },
    });

    const mailOptions = {
      from: '01712622555software@gmail.com',
      to: createEmailDto.to.join(','), 
      subject: createEmailDto.subject,
      text: createEmailDto.body,
      attachments: createEmailDto.attachments ? createEmailDto.attachments.map((attachment) => ({
        path: attachment.path,
      })) : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      const history = this.historyRepository.create({
        to: createEmailDto.to, 
        subject: createEmailDto.subject,
        body: createEmailDto.body,
        attachments: createEmailDto.attachments ? createEmailDto.attachments.map((attachment) => ({
          path: attachment.path,
        })) : [],
        dateTime: new Date(),
      });

      return await this.historyRepository.save(history);
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
