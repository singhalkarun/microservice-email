import { KafkaOptions, Transport } from '@nestjs/microservices';
require('dotenv').config();

export const kafkaConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: [process.env.KAFKA_BROKER_ADDRESS],
    },
    consumer: {
      groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
    },
  },
};
