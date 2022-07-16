const express = require('express')
const helmet = require('helmet');
const engine = require('consolidate');
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000



app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/index'));
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');
http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})