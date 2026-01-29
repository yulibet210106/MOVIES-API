import express from 'express';
import sequelize from './database.js';
import { User, Post } from './models/index.js';

const app = express();
const port = 3000;

app.use(express.json());

// Sincronización
sequelize.sync({ alter: true })
  .then(() => console.log('Modelos sincronizados con la base de datos'))
  .catch(err => console.error('Error sincronizando:', err));

// Ruta de prueba: crear usuario
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
