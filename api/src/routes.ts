import express from 'express';
import runLook from './run-look';

const routes = express.Router();

routes.get('/look/:lookId', runLook);

export default routes;
