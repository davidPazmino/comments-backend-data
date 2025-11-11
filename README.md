# comments-backend-data

Servicio Node.js que simula el acceso a base de datos y expone `GET /data/comments`.

## Variables de entorno requeridas

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

Estas variables se leen al iniciar el servicio y se incluyen (de forma segura) en la respuesta para comprobar la configuración.

## Ejecución local

```bash
npm install
DB_HOST=localhost DB_PORT=5432 DB_NAME=comments DB_USER=comments DB_PASSWORD=secret npm start
```

## Probar el endpoint

```bash
curl http://localhost:8080/data/comments
```

## Construir la imagen Docker

```bash
docker build -t comments-backend-data:latest .
```

## Run de la imagen Docker

```bash
docker run -p 8080:8080 \
  -e DB_HOST=db \
  -e DB_PORT=5432 \
  -e DB_NAME=comments \
  -e DB_USER=comments \
  -e DB_PASSWORD=secret \
  comments-backend-data:latest
```

## Push la imagen Docker
Ejecuta este comando y usa tus credenciales de Docker Hub:

```bash
docker login
```

```bash
docker tag comments-backend-data:latest dpazmino6215/comments-backend-data:latest
docker push dpazmino6215/comments-backend-data:latest
```
