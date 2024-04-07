const express = require('express');
const app = express();
const cors = require("cors");
const helmet = require( "helmet" );
const morgan = require( 'morgan' ) ;
const { createProxyMiddleware } = require( 'http-proxy-middleware' ) ;
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);

// Middleware setup
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(morgan("combined")); // Log HTTP requests
app.disable("x-powered-by"); // Hide Express server information



mongoose.connect(
    'mongodb://mongo:27017/auth-service',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log('Auth-Service Connected to MongoDB'))
    .catch(e => console.log(e));


app.listen(PORT, () => {
    console.log(`Auth-Service listening on port ${PORT}`);
}
);