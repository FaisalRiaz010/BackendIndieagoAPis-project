const app = require('./app');
const cors = require('cors');

// Enable CORS
app.use(cors());
const port = 3000; // Change this to the desired port number

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})