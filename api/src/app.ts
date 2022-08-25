import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import routes from './routes';

export const createApp = () => {
  console.error('Creating app');

  const app = express();

  var corsOptions = {
    origin: '*',
    methods: ['GET', 'PATCH', 'DELETE', 'POST', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  // compress all responses
  app.use(compression());

  // enable cors
  app.use(cors(corsOptions));

  // handle json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // security
  app.use(helmet());

  // add controllers
  app.use(routes);

  // global error handler
  app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    console.error('sdfkjnsdfkjnsdfkjnsdfkjnsdfkjnßå');
    console.log(res);
    console.error(err.message);

    if (res.headersSent) {
      return next(err);
    }

    res.status(500).json();
  });

  return app;
};
