import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import { Server } from 'http';
import { AddressInfo } from 'net';
import { Config } from './config/config';
import { musicRouter } from './routes/music.route';

// Create Express server
const app = express();

// Configuration
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/music', musicRouter);

//app.use('/public', express.static(__dirname + '/public'));

let port = Config.app.port;

//start app on port 3003 and log the message to console
try {
  let server: Server = app.listen(port, () => {
    const addressInfo = server.address() as AddressInfo;
    process.env.NODE_ENV && console.info(`Node Env: ${process.env.NODE_ENV}`);
    console.info(`Serveur running on: ${addressInfo.address}:${addressInfo.port}`);
  });
} catch (e) {
  console.error(e);
}

export default app;
