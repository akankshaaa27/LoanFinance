const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');   // ✅ FIXED

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS setup
const allowedOrigins = [
  'http://localhost:5173',           // Local frontend
  'https://your-frontend.vercel.app' // Replace with deployed frontend domain
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());
app.use(morgan('dev'));

// API routes
app.use('/api/contacts', require('./routes/contactRoutes'));    // ✅ FIXED
app.use('/api/properties', require('./routes/propertyRoutes')); // ✅ FIXED

// Default route
app.get('/', (req, res) => {
  res.send('API is running... 🚀');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
