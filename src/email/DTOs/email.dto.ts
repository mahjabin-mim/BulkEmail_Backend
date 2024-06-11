import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmailDto {
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
