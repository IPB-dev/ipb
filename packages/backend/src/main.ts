import * as dotenv from 'dotenv';
dotenv.config({ path: './packages/backend/.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: [
      'http://localhost:3000',
      /^https:\/\/ipb.*\.vercel\.app$/,
      'https://ipb.vercel.app',
      'https://ipb.dev',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  await app.listen(process.env.PORT || 3001);
}
bootstrap(); 