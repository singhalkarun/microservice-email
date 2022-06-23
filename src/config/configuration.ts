export default () => ({
  smtpEndpoint: process.env.SMTP_ENDPOINT,
  smtpUsername: process.env.SMTP_USERNAME,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpDefaulEmailFromName: process.env.SMTP_DEFAULT_EMAIL_FROM_NAME,
  smtpDefaultEmailFrom: process.env.SMTP_DEFAULT_EMAIL_FROM,
  smtpPort: process.env.SMTP_PORT,
  kafkaBrokerAddress: process.env.KAFKA_BROKER_ADDRESS,
  kafkaConsumerGroupId: process.env.KAFKA_CONSUMER_GROUP_ID,
});
