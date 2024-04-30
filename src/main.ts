import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação To-do list')
    .setDescription(
      'Documentação do projeto cujo objetivo é criar o back-end com banco de dados integrado ao frontend feito em flutter'
    )
    .setVersion('1.0')
    .addTag('list')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(app.listen(3000));
}
bootstrap();
