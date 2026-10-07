const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database Connection Config
const db = mysql.createPool({
  host: 'database-1.c9mmoww4cpbz.eu-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'shivaa', // Dummy password for security on GitHub
  database: 'webstore_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products ORDER BY id DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add new product
app.post('/api/products', (req, res) => {
  const { name, category, price, stock } = req.body;
  const sql = 'INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, category, price, stock], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product added successfully', id: result.insertId });
  });
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Product deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`FashionHub Server running on port ${PORT}`);
});
