import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IEmailData } from './interfaces/email-data.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendMail(data: IEmailData) {
    const smtpDefaulEmailFromName = this.configService.get<string>(
      'smtpDefaulEmailFromName',
    );

    const smtpDefaultEmailFrom = this.configService.get<string>(
      'smtpDefaultEmailFrom',
    );

    try {
      const mail = await this.mailerService.sendMail({
        to: data.to,
        from: {
          name: smtpDefaulEmailFromName,
          address: smtpDefaultEmailFrom,
        },
        subject: data.subject,
        html: data.html,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
