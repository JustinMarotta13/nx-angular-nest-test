import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// Import firebase-admin
import * as admin from 'firebase-admin';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
  
  // Initialize the firebase admin app
  // admin.initializeApp({
  //   credential: admin.credential.applicationDefault(),
  //   databaseURL: 'https://mgd-nx-test.firebaseio.com',
  // });

  // app.enableCors();

}
bootstrap();
