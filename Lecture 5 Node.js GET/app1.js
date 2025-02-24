
var express = require('express')  
var app = express()
var port = 8080
var crypto = require('crypto')
var file = require('./users.json');

app.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId
  let user = file.users.find(({ id }) => id === userId)
  if (user === undefined) {
    res.status(404).send('User not found')
  }
  const hash = crypto.createHash('sha1')
  hash.update(String(user.password))
  const hashedPassword = hash.digest('hex')
  res.send({
    ...user,
    password: hashedPassword
  })
})

app.listen(port, '0.0.0.0',() => {
  console.log(`App listening on port ${port}`)
})