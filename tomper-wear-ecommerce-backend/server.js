// load env-vars
require('dotenv').config();
const fs = require('fs');
const https = require('https');
// requiring dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// initialize express
const app = express();

// requiring routers
const paymentRouter = require('./routes/paymentRouter');
const productRouter = require('./routes/productRouter');
const adminRouter = require('./routes/adminRouter');
const orderRouter = require('./routes/orderRouter');
const uploadRouter = require('./routes/uploadRouter');

// requiring middlewares
const errorMiddleware = require('./middleware/Error');

// require db configs
const connectToDb = require('./config/db');

// require cloudinary configs
const cloudinary = require('./config/cloudinary');

// uncaught exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to uncaught exception`);
  process.exit(1);
});

// connect to db
connectToDb();
// Enable CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://localhost:3000');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   next();
// });

// using middlewares
const allowedOrigins = ['https://localhost:3000', 'https://localhost:3001'];
app.use(
  cors({
    origin: allowedOrigins,
  
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// basic api route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API service running 🚀',
  });
});





// using routers
app.use('/api/payment', paymentRouter);
app.use('/api/products', productRouter);
app.use('/api/admin', adminRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

// using other middlewares
app.use(errorMiddleware);

// handle CORS preflight request
app.options('*', cors());

// SSL configuration
const sslOptions = {
  key: fs.readFileSync('./private.key'), // Path to your private key file
  cert: fs.readFileSync('./certificate.crt'), // Path to your certificate file
};
// starting server
const server = https.createServer(sslOptions, app).listen(process.env.PORT || 5000, () => {
  console.log('Server running with SSL');
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
