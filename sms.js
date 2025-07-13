// Import Twilio SDK
const twilio = require('twilio');

// Twilio credentials (replace with your own)
const accountSid = 'YOUR_ACCOUNT_SID'; // From Twilio Console
const authToken = 'YOUR_AUTH_TOKEN';   // From Twilio Console

const client = new twilio(accountSid, authToken);

// Send SMS
client.messages
  .create({
    body: 'Hello! This is a test SMS sent using Node.js + Twilio.',
    from: '+1234567890', // Your Twilio number
    to: '+919876543210'   // Recipient's phone number
  })
  .then(message => console.log(`Message sent! SID: ${message.sid}`))
  .catch(error => console.error(error));
