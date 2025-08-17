
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
//const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Инициализация базы данных SQLite
const dbPath = path.join(__dirname, 'InterCodeLearn_db.sqlite');

// Удаляем старую базу данных при каждом запуске (для тестирования)
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('🗑️ Old database deleted');
}

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('❌ Error opening SQLite database:', err.message);
    process.exit(1);
  }
});

// Определяем пути к клиентским файлам
const clientDir = path.join(__dirname, '../client');
const jsDir = path.join(clientDir, 'js');
const languagesDir = path.join(clientDir, 'languages');

// Проверяем существование папок
if (!fs.existsSync(clientDir) || !fs.existsSync(jsDir) || !fs.existsSync(languagesDir)) {
  console.error('❌ Client folders not found:', { clientDir, jsDir, languagesDir });
  process.exit(1);
}

// Настройка статических файлов
app.use(express.static(clientDir)); // Основная папка клиента
app.use('/js', express.static(jsDir)); // Специальный маршрут для JS
app.use('/languages', express.static(languagesDir)); // Маршрут для языковых файлов

async function initializeDatabase() {
  try {
    const sqlFiles = [
      'SQL_BD/CPP/tables.sql',
      'SQL_BD/CPP/examples_data.sql',
      'SQL_BD/CPP/templates_data.sql',
      'SQL_BD/CPP/keywords_data.sql',
      'SQL_BD/CPP/explanations_data.sql',
      'SQL_BD/CSharp/tables.sql',
      'SQL_BD/CSharp/examples_data.sql',
      'SQL_BD/CSharp/templates_data.sql',
      'SQL_BD/CSharp/keywords_data.sql',
      'SQL_BD/CSharp/explanations_data.sql',
      ];
    
    for (const file of sqlFiles) {
      const sql = fs.readFileSync(path.join(__dirname, file), 'utf8');
      await new Promise((resolve, reject) => {
        db.exec(sql, (err) => err ? reject(err) : resolve());
      });
      console.log(`✅ Executed ${file}`);
    }
    
    await db.run("CREATE INDEX IF NOT EXISTS idx_keywords_category ON CSharp_keywords(category)");
    console.log('✅ Database initialized successfully');
    await db.run("CREATE INDEX IF NOT EXISTS idx_keywords_category ON CPP_keywords(category)");
    console.log('✅ Database initialized successfully');
  } catch (err) {
    console.error('❌ Error initializing database:', err.message);
    throw err;
  }
}




// Логирование запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Endpoints
app.get(`/api/CSharp/CSharp_examples`, async (req, res) => {
  try {
    db.all('SELECT * FROM CSharp_examples ORDER BY id', (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } catch (err) {
    console.error('Error fetching CSharp_examples:', err);
    res.status(500).json({
      error: 'Database error',
      message: err.message
    });
  }
});

app.get(`/api/CSharp/CSharp_templates`, async (req, res) => {
  try {
    db.all('SELECT * FROM CSharp_templates ORDER BY example_id', (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } catch (err) {
    console.error('Error fetching templates:', err);
    res.status(500).json({
      error: 'Database error',
      message: err.message
    });
  }
});



// Пример для Node.js + Express
app.get(`/api/CSharp/CSharp_code-explanations/:id`, (req, res) => {
  db.get(
    'SELECT * FROM CSharp_code_explanations WHERE example_id = ?',
    [req.params.id],
    (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!row) {
        return res.status(404).json({ 
          error: 'Объяснение не найдено',
          structure: "Нет информации",
          algorithm: "Нет информации", 
          notes: "Нет примечаний"
        });
      }
      
      res.json(row);
    }
  );
});



app.get(`/api/CSharp/CSharp_keywords/:word`, async (req, res) => {
  const word = req.params.word;
  console.log(`Requesting explanation for word: ${word}`);

  try {
    db.get(
      'SELECT keyword, description, example FROM CSharp_keywords WHERE keyword = ?',
      [word],
      (err, row) => {
        if (err) {
          throw err;
        }

        if (row) {
          res.json(row);
        } else {
          res.status(404).json({
            error: 'Keyword not found',
            keyword: word
          });
        }
      }
    );
  } catch (error) {
    console.error(`Error fetching keyword ${word}:`, error);
    res.status(500).json({
      error: 'Database error',
      keyword: word,
      message: error.message
    });
  }
});






// API Endpoints
app.get(`/api/CPP/CPP_examples`, async (req, res) => {
  try {
    db.all('SELECT * FROM CPP_examples ORDER BY id', (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } catch (err) {
    console.error('Error fetching CPP_examples:', err);
    res.status(500).json({
      error: 'Database error',
      message: err.message
    });
  }
});

app.get(`/api/CPP/CPP_templates`, async (req, res) => {
  try {
    db.all('SELECT * FROM CPP_templates ORDER BY example_id', (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } catch (err) {
    console.error('Error fetching templates:', err);
    res.status(500).json({
      error: 'Database error',
      message: err.message
    });
  }
});



// Пример для Node.js + Express
app.get(`/api/CPP/CPP_code-explanations/:id`, (req, res) => {
  db.get(
    'SELECT * FROM CPP_code_explanations WHERE example_id = ?',
    [req.params.id],
    (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!row) {
        return res.status(404).json({ 
          error: 'Объяснение не найдено',
          structure: "Нет информации",
          algorithm: "Нет информации", 
          notes: "Нет примечаний"
        });
      }
      
      res.json(row);
    }
  );
});


app.get(`/api/CPP/CPP_keywords/:word`, async (req, res) => {
  const word = req.params.word;
  console.log(`Requesting explanation for word: ${word}`);

  try {
    db.get(
      'SELECT keyword, description, example FROM CPP_keywords WHERE keyword = ?',
      [word],
      (err, row) => {
        if (err) {
          throw err;
        }

        if (row) {
          res.json(row);
        } else {
          res.status(404).json({
            error: 'Keyword not found',
            keyword: word
          });
        }
      }
    );
  } catch (error) {
    console.error(`Error fetching keyword ${word}:`, error);
    res.status(500).json({
      error: 'Database error',
      keyword: word,
      message: error.message
    });
  }
});

// Обработка SPA (должна быть последней)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDir, 'index.html'));
});

// 9. Обработка ошибок
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// 10. Запуск сервера
async function startServer() {
  try {
    await initializeDatabase();

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`
      🚀 Server running at http://localhost:${PORT}
      📁 Serving files from: ${clientDir}
      
      Available API endpoints:
      - GET /api/examples
      - GET /api/templates
      - GET /api/keyword/:word
      
      Static files served from:
      - / → ${clientDir}
      - /js → ${jsDir}
      - /languages → ${languagesDir}
      `);
    });
  } catch (err) {
    console.error('Failed to initialize database:', err);
    process.exit(1);
  }
}

startServer();