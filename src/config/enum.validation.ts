import { plainToClass } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsString()
  SMTP_ENDPOINT: string;

  @IsString()
  SMTP_USERNAME: string;

  @IsString()
  SMTP_PASSWORD: string;

  @IsString()
  SMTP_DEFAULT_EMAIL_FROM_NAME: string;

  @IsString()
  SMTP_DEFAULT_EMAIL_FROM: string;

  @IsString()
  KAFKA_BROKER_ADDRESS: string;

  @IsString()
  KAFKA_CONSUMER_GROUP_ID: string;

  @IsString()
  SMTP_PORT: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
