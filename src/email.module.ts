import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './config/enum.validation';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      load: [configuration],
      isGlobal: true,
    }),

    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('smtpEndpoint'),
          port: parseInt(configService.get<string>('smtpPort')),
          secure: false,
          auth: {
            user: configService.get<string>('smtpUsername'),
            pass: configService.get<string>('smtpPassword'),
          },
        },
        defaults: {
          from: `"${configService.get<string>(
            'smtpDefaulEmailFromName',
          )} <${configService.get<string>('smtpDefaultEmailFrom')}>`,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
