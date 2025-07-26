// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');
// const cors = require('cors');
// const fs = require('fs');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // 1. Initialize SQLite database
// const dbPath = path.join(__dirname, 'csharp_examples_db.sqlite');

// if (fs.existsSync(dbPath)) {
//   fs.unlinkSync(dbPath); // Удаляем файл
//   console.log('🗑️ Old database deleted');
// }

// const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
//   if (err) {
//     console.error('❌ Error opening SQLite database:', err.message);
//     process.exit(1);
//   }
// });

// // 2. Define path to client files
// const staticDir = path.join(__dirname, '../client');

// // Check if client folder exists
// if (!fs.existsSync(staticDir)) {
//   console.error('❌ Client folder not found:', staticDir);
//   process.exit(1);
// }

// // 3. Middleware
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST']
// }));
// app.use(express.json());

// // 4. Single static middleware call
// app.use(express.static(staticDir));

// // 5. Database initialization and connection test
// async function initializeDatabase() {
//   return new Promise((resolve, reject) => {
//     // Check if database exists and has tables
//     db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='examples'", (err, row) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       if (!row) {
//         // Database is empty, need to initialize
//         console.log('🔧 Initializing new database...');
//         const sqlScript = fs.readFileSync(path.join(__dirname, 'database.sql'), 'utf8');

//         db.exec(sqlScript, (execErr) => {
//           if (execErr) {
//             console.error('❌ Error initializing database:', execErr.message);
//             reject(execErr);
//           } else {
//             console.log('✅ Database initialized successfully');
//             resolve(true);
//           }
//         });
//       } else {
//         console.log('✅ Database already exists and is properly structured');
//         resolve(true);
//       }
//     });
//   });
// }

// // 6. Request logging
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// });

// // 7. API Endpoints (rewritten for SQLite)
// app.get('/api/examples', async (req, res) => {
//   try {
//     db.all('SELECT * FROM examples ORDER BY id', (err, rows) => {
//       if (err) {
//         throw err;
//       }
//       res.json(rows);
//     });
//   } catch (err) {
//     console.error('Error fetching examples:', err);
//     res.status(500).json({
//       error: 'Database error',
//       message: err.message
//     });
//   }
// });

// app.get('/api/templates', async (req, res) => {
//   try {
//     db.all('SELECT * FROM templates ORDER BY example_id', (err, rows) => {
//       if (err) {
//         throw err;
//       }
//       res.json(rows);
//     });
//   } catch (err) {
//     console.error('Error fetching templates:', err);
//     res.status(500).json({
//       error: 'Database error',
//       message: err.message
//     });
//   }
// });

// app.get('/api/keyword/:word', async (req, res) => {
//   const word = req.params.word;
//   console.log(`Requesting explanation for word: ${word}`);

//   try {
//     db.get(
//       'SELECT keyword, description, example FROM csharp_keywords WHERE keyword = ?',
//       [word],
//       (err, row) => {
//         if (err) {
//           throw err;
//         }

//         if (row) {
//           res.json(row);
//         } else {
//           res.status(404).json({
//             error: 'Keyword not found',
//             keyword: word
//           });
//         }
//       }
//     );
//   } catch (error) {
//     console.error(`Error fetching keyword ${word}:`, error);
//     res.status(500).json({
//       error: 'Database error',
//       keyword: word,
//       message: error.message
//     });
//   }
// });

// // 8. SPA handling
// app.get('*', (req, res) => {
//   res.sendFile(path.join(staticDir, 'index.html'));
// });

// // 9. Error handling
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).json({
//     error: 'Internal server error',
//     message: err.message
//   });
// });

// // 10. Server startup
// async function startServer() {
//   try {
//     await initializeDatabase();

//     app.listen(PORT, '0.0.0.0', () => {
//       console.log(`
//       🚀 Server running at http://localhost:${PORT}
//       📁 Serving files from: ${staticDir}
      
//       Available API endpoints:
//       - GET /api/examples
//       - GET /api/templates
//       - GET /api/keyword/:word
//       `);
//     });
//   } catch (err) {
//     console.error('Failed to initialize database:', err);
//     process.exit(1);
//   }
// }

// startServer();




const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Инициализация базы данных SQLite
const dbPath = path.join(__dirname, 'csharp_examples_db.sqlite');

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

// 2. Определяем пути к клиентским файлам
const clientDir = path.join(__dirname, '../client');
const jsDir = path.join(clientDir, 'js');
const languagesDir = path.join(clientDir, 'languages');

// Проверяем существование папок
if (!fs.existsSync(clientDir) || !fs.existsSync(jsDir) || !fs.existsSync(languagesDir)) {
  console.error('❌ Client folders not found:', { clientDir, jsDir, languagesDir });
  process.exit(1);
}

// 3. Настройка middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST']
}));
app.use(express.json());

// 4. Настройка статических файлов
app.use(express.static(clientDir)); // Основная папка клиента
app.use('/js', express.static(jsDir)); // Специальный маршрут для JS
app.use('/languages', express.static(languagesDir)); // Маршрут для языковых файлов

// 5. Инициализация базы данных
async function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='examples'", (err, row) => {
      if (err) {
        reject(err);
        return;
      }

      if (!row) {
        console.log('🔧 Initializing new database...');
        const sqlScript = fs.readFileSync(path.join(__dirname, 'database.sql'), 'utf8');

        db.exec(sqlScript, (execErr) => {
          if (execErr) {
            console.error('❌ Error initializing database:', execErr.message);
            reject(execErr);
          } else {
            console.log('✅ Database initialized successfully');
            resolve(true);
          }
        });
      } else {
        console.log('✅ Database already exists and is properly structured');
        resolve(true);
      }
    });
  });
}

// 6. Логирование запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 7. API Endpoints
app.get('/api/examples', async (req, res) => {
  try {
    db.all('SELECT * FROM examples ORDER BY id', (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows);
    });
  } catch (err) {
    console.error('Error fetching examples:', err);
    res.status(500).json({
      error: 'Database error',
      message: err.message
    });
  }
});

app.get('/api/templates', async (req, res) => {
  try {
    db.all('SELECT * FROM templates ORDER BY example_id', (err, rows) => {
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

app.get('/api/keyword/:word', async (req, res) => {
  const word = req.params.word;
  console.log(`Requesting explanation for word: ${word}`);

  try {
    db.get(
      'SELECT keyword, description, example FROM csharp_keywords WHERE keyword = ?',
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

// 8. Обработка SPA (должна быть последней)
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