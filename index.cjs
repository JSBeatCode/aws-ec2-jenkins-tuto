const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// 젠킨스 실행을 위한 커밋2

app.listen(7771, () => {
    console.log('Server Started 7771')
})