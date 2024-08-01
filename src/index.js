const express = require('express');
const path = require('path');
const fs = require('fs');
const dataRoutes = require('./routes/dataRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const loadData = () => {
  const filePath = path.resolve(__dirname, '../data/data.json');
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Data loading error:', error);
    return [];
  }
};

app.use((req, res, next) => {
  req.data = loadData();
  next();
});

app.use('/api', dataRoutes);

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
