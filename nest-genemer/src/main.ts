import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./common/validations/pipe.validation";
import { AppModule } from "./app.module";

const cors = require("cors");

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Приложение Nest-Genemers")
    .setDescription("Документация REST API")
    .setVersion("1.0.0")
    .addTag("ARTUR_PETRIN")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () =>
    console.log(`Server started on port = http://127.0.0.1:${PORT}`),
  );
}

start();
