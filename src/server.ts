// Load app
import app from './app';

// Start the server
const port = Number(process.env.PORT || 3000);
const server = app.listen(port, () => {
    console.log('Express server started on port: ' + port);
});

/** Gracefully shutdown the node process */
const shutdown = async () => {
    console.log('Shutting down server ...');
    server.close(() => {
        console.log('Server Shutdown');
        process.exit(0);
    });
};

// Handle signals
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Handle errors
process.on('unhandledRejection', (reason: any) => {
    const message = reason?.stack || JSON.stringify(reason);
    console.error(message);
});
process.on('uncaughtException', (error) => {
    console.error(error?.stack || error);
    shutdown();
});
