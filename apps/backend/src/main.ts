import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation Settings
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Settings
  const config = new DocumentBuilder()
    .setTitle('Todo example')
    .setDescription('The Todos API description')
    .setVersion('1.0')
    .addTag('Todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Server Listening
  await app.listen(8000);
}
bootstrap();
