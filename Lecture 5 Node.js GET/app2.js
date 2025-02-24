
var express = require('express')  
var app = express()
var port = 8081
var fs = require('fs')

app.get('/showForm', (req, res) => {
  let doc = fs.readFileSync('index.html', 'utf8')
  res.send(doc)
})

app.get('/showData', (req, res) => {
  let newData = {
    'fname': req.query.fname,
    'lname': req.query.lname,
    'result': parseInt(req.query.input1) + parseInt(req.query.input2)
  }
  fs.readFile('output.json', 'utf8', (err, fileData) => {
    if (err && err.code !== 'ENOENT') {
      res.status(500).send('Internal Server Error')
      return
    }

    let json = []
    if (fileData) {
      try {
        json = JSON.parse(fileData)
      } catch (e) {
        res.status(500).send('Error parsing JSON')
        return
      }
    }

    json.push(newData)

    fs.writeFile('output.json', JSON.stringify(json), (err) => {
      if (err) {
        res.status(500).send('Internal Server Error')
        return
      }
      res.send(json)
    })
  })
})

app.listen(port, '0.0.0.0',() => {
  console.log(`App listening on port ${port}`)
})