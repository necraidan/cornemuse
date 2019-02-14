import express from 'express';
import fs from 'fs';

// Create Express server
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  return res.redirect('/public/home.html');
});

// define a route music it creates readstream to the requested file and pipes the output to response
app.get('/music', function(req, res) {
  let fileId = req.query.id;
  let file = __dirname + '/music/' + fileId;
  fs.exists(file, function(exists) {
    if (exists) {
      let rstream = fs.createReadStream(file);
      rstream.pipe(res);
      console.log(file);
      console.log('found !');
    } else {
      res.send('Its a 404');
      res.end();
    }
  });
});

app.get('/download', function(req, res) {
  let fileId = req.query.id;
  let file = __dirname + '/music/' + fileId;
  fs.exists(file, function(exists) {
    if (exists) {
      res.setHeader('Content-disposition', 'attachment; filename=' + fileId);
      res.setHeader('Content-Type', 'application/audio/mpeg3');
      let rstream = fs.createReadStream(file);
      rstream.pipe(res);
    } else {
      res.send('Its a 404');
      res.end();
    }
  });
});

// start app on port 3003 and log the message to console
app.listen(3003, function() {
  console.log('App listening on port 3003 !');
});

export default app;
