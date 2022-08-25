import { createApp } from './app';
import initLooker from './looker';

process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', error);
});

const startServer = async () => {
  try {
    const app = createApp();

    await initLooker();

    await app.listen(8080);

    console.log('[server]: Server is running at https://localhost:8080');
  } catch (error) {
    console.error(`Failed to constart server: ${error.message}`, error);
  }
};

startServer();
