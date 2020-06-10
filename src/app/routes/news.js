const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();
  app.get('/', (req, res) => {
    
      res.render('news/index', {
      
      });
    });
  

  app.get('/vista_mas_escuchadas', (req, res) => {
    connection.query('SELECT * FROM vista_mas_escuchadas', (err, result) => {
      res.render('news/vista_mas_escuchadas', {
        vista_mas_escuchadas: result
      });
    });
  });

  app.get('/vista_origen_artistas', (req, res) => {
    connection.query('SELECT * FROM vista_origen_artistas', (err, result) => {
      res.render('news/vista_origen_artistas', {
        vista_origen_artistas: result
      });
    });
  });

  app.get('/vista_reportes', (req, res) => {
    connection.query('SELECT * FROM vista_reportes', (err, result) => {
      res.render('news/vista_reportes', {
        vista_reportes: result
      });
    });
  });

}; 