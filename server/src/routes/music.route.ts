import express from 'express';
import fs from 'fs';
import path from 'path';
import { Config } from '../config/config';

export const musicRouter = express.Router();

/**
 * Get list of musics
 */

musicRouter.get('/', async (req, res, next) => {
  let folder = path.join(Config.endpoints.musicFolder.target);

  console.log(folder);

  fs.readdir(folder, (err, files) => {
    console.log(err);
    console.log(files);
    let fileInfo: any[] = [];

    files.forEach(file => {
      // TODO: https://www.npmjs.com/package/music-metadata
      fileInfo.push(fs.statSync(path.join(folder, file)));
    });

    if (err) {
      res.send(err);
    } else {
      res.send({ files, fileInfo });
    }
  });
});

/**
 * Get music
 */
musicRouter.get('/:musicId', async (req, res, next) => {
  let file = path.join(Config.endpoints.musicFolder.target, req.params.musicId);

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

// app.get('/download', function (req, res) {
//     let fileId = req.query.id;
//     let file = __dirname + '/music/' + fileId;
//     fs.exists(file, function (exists) {
//         if (exists) {
//             res.setHeader('Content-disposition', 'attachment; filename=' + fileId);
//             res.setHeader('Content-Type', 'application/audio/mpeg3');
//             let rstream = fs.createReadStream(file);
//             rstream.pipe(res);
//         } else {
//             res.send('Its a 404');
//             res.end();
//         }
//     });
// });
