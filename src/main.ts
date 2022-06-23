import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { kafkaConfig } from './config/kafkaConfig';
import { EmailModule } from './email.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmailModule,
    kafkaConfig,
  );

  await app.listen();
}
bootstrap();
