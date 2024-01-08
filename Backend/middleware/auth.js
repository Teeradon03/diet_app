// session.js
const express = require('express');
const session = require('express-session');

const authSession = session({
  secret: 'Ahoiya',
  resave: false,
  saveUninitialized: true,
});

module.exports = authSession;