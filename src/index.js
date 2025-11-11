const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  name: process.env.DB_NAME || 'comments',
  user: process.env.DB_USER || 'comments',
  password: process.env.DB_PASSWORD || 'changeme',
};

app.get('/data/comments', (req, res) => {
  const comments = [
    {
      id: 1,
      author: 'Equipo OpenShift',
      message: '¡Bienvenido al reto!',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      author: 'Sistema',
      message: 'Estos datos provienen del backend-data.',
      createdAt: new Date().toISOString(),
    },
  ];

  res.json({
    metadata: {
      source: 'simulated',
      db: {
        host: dbConfig.host,
        port: dbConfig.port,
        name: dbConfig.name,
        user: dbConfig.user,
        password: dbConfig.password ? '***' : '',
      },
    },
    data: comments,
  });
});

app.listen(PORT, () => {
  console.log(`Backend data escuchando en puerto ${PORT}`);
});
