import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { IEmailData } from './interfaces/email-data.interface';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @EventPattern('send_mail')
  async sendMail(@Payload('value') data: IEmailData) {
    await this.emailService.sendMail(data);
  }
}
