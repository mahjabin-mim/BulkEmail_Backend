import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import Attachment from './attachment.dto';

export class CreateEmailDto {
  @IsArray()
  @IsEmail({}, { each: true })
  @IsNotEmpty()
  to: string[];

  @IsString()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  attachments: Attachment[];
}
