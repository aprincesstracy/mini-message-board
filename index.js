const express = require('express');
const router = express.Router();

// Messages array
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

// INDEX PAGE
router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages });
});

// NEW MESSAGE FORM
router.get('/new', (req, res) => {
  res.render('form');
});

// HANDLE FORM SUBMISSION
router.post('/new', (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect('/');
});

// MESSAGE DETAILS PAGE
router.get('/message/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('message', { message });
});

module.exports = router; 