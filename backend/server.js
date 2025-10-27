import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Database file
const dbPath = path.join(__dirname, 'data', 'database.json');

// Initialize database if it doesn't exist
async function initDatabase() {
  try {
    await fs.access(dbPath);
  } catch {
    const initialData = {
      constructionServices: [],
      interiorDesignProjects: [],
      wines: [],
      orders: []
    };
    await fs.writeFile(dbPath, JSON.stringify(initialData, null, 2));
  }
}

// Helper function to read database
async function readDB() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

// Helper function to write database
async function writeDB(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

// Get all data
app.get('/api/data', async (req, res) => {
  try {
    const data = await readDB();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Construction Services APIs
app.get('/api/construction-services', async (req, res) => {
  try {
    const data = await readDB();
    res.json(data.constructionServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/construction-services', async (req, res) => {
  try {
    const data = await readDB();
    const newService = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    data.constructionServices.push(newService);
    await writeDB(data);
    res.json(newService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Interior Design Projects APIs
app.get('/api/interior-design-projects', async (req, res) => {
  try {
    const data = await readDB();
    res.json(data.interiorDesignProjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/interior-design-projects', async (req, res) => {
  try {
    const data = await readDB();
    const newProject = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    data.interiorDesignProjects.push(newProject);
    await writeDB(data);
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Wines APIs
app.get('/api/wines', async (req, res) => {
  try {
    const data = await readDB();
    res.json(data.wines);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/wines', async (req, res) => {
  try {
    const data = await readDB();
    const newWine = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    data.wines.push(newWine);
    await writeDB(data);
    res.json(newWine);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Orders APIs
app.get('/api/orders', async (req, res) => {
  try {
    const data = await readDB();
    res.json(data.orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const data = await readDB();
    const newOrder = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    data.orders.push(newOrder);
    await writeDB(data);
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  await initDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});

