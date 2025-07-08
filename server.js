const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: 'adityakwatra7@gmail.com',
    pass: 'LordGanesha@123' // Use app password for Gmail
  }
});

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: 'kwatraa@oregonstate.edu', // Your email
    subject: `Portfolio Contact: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});