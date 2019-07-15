var express = require('express');
const jsonwebtoken = require('jsonwebtoken')
var router = express.Router();


// [POST] /login
router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  const valid = username.length && password === '123'

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  const accessToken = jsonwebtoken.sign(
    {
      username,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + username,
      scope: ['test', 'user']
    },
    'dummysecretkey'
  )

  res.json({
    token: {
      accessToken
    }
  })
})

// [POST] /logout
router.post('/logout', (req, res, next) => {
  res.json({ status: 'OK' })
})

// [GET] /user
router.get('/user', (req, res, next) => {
  res.json({ user: req.user })
})


module.exports = router;